import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Car } from 'src/app/Models/car';
import { ConstraintViolationList } from '../../Models/constraint-violation-list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  public car: Car|null = null;

  @Input()
  public violationList: ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<Car>();

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
    if (this.car !== null) {
      if (this.car.name === ''){
        alert("Veuillez entrer le nom de l'annonce !");
      } else if (((this.car.name).length) <2) {
        alert("Le nom de l'annonce doit faire au moins 2 caractères !");
      } 
      else if (this.car.description === undefined){
          alert("Veuillez entrer la description de l'annonce !");
      } else if (this.car.description === ''){
        alert("Veuillez entrer la description de l'annonce !");
      } else if (((this.car.description).length) <2) {
        alert("La description de l'annonce doit faire au moins 2 caractères !");
      } 
      else if (this.car.price === undefined){
          alert("Veuillez entrer le prix de la voiture !");
      } else if (this.car.price === ''){
        alert("Veuillez entrer le prix de la voiture !");
      } else if (((this.car.price).length) <2) {
        alert("Le prix de la voiture doit faire au moins 2 caractères !");
      } 
      else if (this.car.km === undefined){
          alert("Veuillez entrer le kilométrage de la voiture !");
      } else if (this.car.km === ''){
        alert("Veuillez entrer le kilométrage de la voiture !");
      } else if (((this.car.km).length) <2) {
        alert("Le kilométrage de la voiture doit faire au moins 2 caractères !");
      } 
      else if (this.car.year === undefined){
          alert("Veuillez entrer l'année de fabrication de la voiture !");
      } else if (this.car.year === ''){
        alert("Veuillez entrer l'année de fabrication de la voiture !");
      } else if (((this.car.year).length) <2) {
        alert("L'année de fabrication de la voiture doit faire au moins 2 caractères !");
      } 
      this.formSubmit.emit(this.car);
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
    this._snackBar.open("Annonce mise à jour", "Fermer");
  }
}

