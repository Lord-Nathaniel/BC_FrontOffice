import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Garage } from 'src/app/Models/garage';
import { ConstraintViolationList } from '../../Models/constraint-violation-list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-garage-form',
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.css']
})
export class GarageFormComponent implements OnInit {

  @Input()
  public garage: Garage|null = null;

  @Input()
  public violationList: ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<Garage>();

  public creation:boolean|null = null;

  public isDarkMode:boolean;

  constructor (private themeService: ThemeService, private _snackBar: MatSnackBar) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

  ngOnInit(): void {
    let currenturl = (window.location.href).toString();
   if (currenturl.slice(-6)==="create"){
     this.creation=true;
   } else {
    this.creation=false;
   }
  }

  public submit(): void {
    if (this.garage !== null) {
      if (this.garage.name === ''){
        alert("Veuillez entrer le nom du garage !");
      } else if (((this.garage.name).length) <2) {
        alert("Le nom du garage doit faire au moins 2 caractères !");
      } 
      else if (this.garage.siret === undefined){
          alert("Veuillez entrer le SIRET du garage !");
      } else if (this.garage.siret === ''){
        alert("Veuillez entrer le SIRET du garage !");
      } else if (((this.garage.siret).length) !== 14) {
        alert("Le SIRET du garage doit faire 14 chiffres !");
      } 
      else if (this.garage.adresse === undefined){
        alert("Veuillez entrer l'adresse du garage !");
      } else if (this.garage.adresse === ''){
        alert("Veuillez entrer l'adresse du garage !");
      } else if (((this.garage.adresse).length) <2) {
        alert("L'adresse du garage doit faire au moins 2 caractères !");
      }   
      else if (this.garage.postalcode === undefined){
        alert("Veuillez entrer le code postal du garage !");
      } else if (this.garage.postalcode === ''){
        alert("Veuillez entrer le code postal du garage !");
      } else if (((this.garage.postalcode).length) !== 5) {
        alert("Le code postal du garage doit faire au moins 5 chiffres !");
      }   
      else if (this.garage.town === undefined){
        alert("Veuillez entrer la ville du garage !");
      } else if (this.garage.town === ''){
        alert("Veuillez entrer la ville  du garage !");
      } else if (((this.garage.town).length) <2) {
        alert("La ville doit faire au moins 2 caractères !");
      }   
      else if (this.garage.phone === undefined){
        alert("Veuillez entrer le téléphone du garage !");
      } else if (this.garage.phone === ''){
        alert("Veuillez entrer le téléphone du garage !");
      } else if (((this.garage.phone).length) <2) {
        alert("Le téléphone du garage doit faire au moins 2 caractères !");
      }   
      this.formSubmit.emit(this.garage);
      }
    }

  public retrieveErrors(fieldName: string): Array<string> {
    const arr: Array<string> = [];

    if (this.violationList !== null) {
      for (const err of this.violationList.violations) {
        if (err.propertyPath === fieldName) {
          arr.push(err.message);
        }
      }
    }

    return arr;
  }

  openSnackBar() {
    this._snackBar.open("Garage mis à jour", "Fermer");
  }
}