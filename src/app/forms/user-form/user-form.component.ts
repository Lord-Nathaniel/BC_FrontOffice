import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { User } from 'src/app/Models/user';
import { ConstraintViolationList } from '../../Models/constraint-violation-list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  @Input()
  public user: User|null = null;

  @Input()
  public violationList: ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<User>();

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
    if (this.user !== null) {
      if (this.user.lastname === undefined){
        alert("Veuillez entrer votre nom !");
      } else if (this.user.lastname === ''){
        alert("Veuillez entrer votre nom !");
      } else if (((this.user.lastname).length) <2) {
        alert("Votre nom doit faire au moins 2 caractères !");
      } else if (this.user.firstname === undefined){
          alert("Veuillez entrer votre nom !");
      } else if (this.user.firstname === ''){
        alert("Veuillez entrer votre prénom !");
      } else if (((this.user.firstname).length) <2) {
        alert("Votre prénom doit faire au moins 2 caractères !");
      } else if (this.user.password === ''){
        alert("Veuillez entrer votre mot de passe !");
      } else if (((this.user.password).length) <2) {
        alert("Votre mot de passe doit faire au moins 2 caractères !");
      } else if (this.user.email === ''){
        alert("Veuillez entrer votre email !");
      } else if (((this.user.email).length) <2){
        alert("Votre email doit faire au moins 2 caractères !");
      } else {    
      this.formSubmit.emit(this.user);
      }
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
    this._snackBar.open("Profil mis à jour", "Fermer");
  }
}