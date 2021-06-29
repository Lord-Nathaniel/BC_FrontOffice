import { Component, OnInit, Inject } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { Router } from '@angular/router';
import { ThemeService } from '../core/services/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogIdentifierComponent } from './dialog-identifier/dialog-identifier.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserList } from '../Models/user-list';
import { UserJsonld } from '../Models/user-jsonld';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { DialogInscriptionComponent } from './dialog-inscription/dialog-inscription.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    public loaderService: LoaderService,
    private router: Router, 
    private themeService: ThemeService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,) 
    {
      this.themeService.initColorTheme();
      this.themeService.initSizeTheme();
      this.isDarkMode = this.themeService.isDarkMode();
      this.isFontSize = this.themeService.isFontSize();
    }

  public isCollapsed:boolean = true;
  public isContactCollapsed:boolean = true;
  public isMenuCollapsed:boolean = true;
  public isProfessionnelCollapsed:boolean = true;
  public isParticulierCollapsed:boolean = true;
  public isOptionCollapsed:boolean = true;
  public isAdminCarCollapsed:boolean = true;
  public isAdminGarageCollapsed:boolean = true;
  public isAdminUserCollapsed:boolean = true;

  public isDarkMode:boolean;
  public isFontSize:boolean;

  public currentUrl: string = window.location.pathname;

  public emailIdentifier: string ='';
  public passwordIdentifier: string ='';
  public firstnameInscription: string ='';
  public lastnameInscription: string = '';
  public emailInscription: string = '';
  public lastnameContact: string= '';
  public emailContact: string= '';
  public phoneContact: string= '';
  public textContact: string= '';

  public user: Array<UserJsonld> =[];
  public userId: number|null = null;
  public role: string= 'User';

  ngOnInit(  ) {
    let location = (window.location.href).toString();
    //in location : http://localhost:4200/profileLinks/128
    let urlSearchOne = location.match(/(admin)/);
    let urlSearchTwo = location.match(/(adminLogin)/);
    //in urlCut : [0] : profileLinks/128
    //            [1] : 128
    if(urlSearchOne != null && urlSearchTwo == null){
      this.role = "Admin";
    } else if(urlSearchTwo != null) {
      this.role = "Login";
    }  
    
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.themeService.updateColor('light-mode') : this.themeService.updateColor('dark-mode');
  }

  toggleFontSize() {
    this.isFontSize = this.themeService.isFontSize();
    this.isFontSize ? this.themeService.updateSize('small-size') : this.themeService.updateSize('large-size');
  }

  public check(urlLink:string): void {
    this.currentUrl= window.location.pathname;
    if (this.currentUrl != urlLink){
    this.isCollapsed = true;
    this.isContactCollapsed = true;
    this.isMenuCollapsed = true;
    this.isProfessionnelCollapsed = true;
    this.isParticulierCollapsed = true;
    this.isOptionCollapsed = true;
    this.router.navigate([urlLink]);
    }
  }

  openContact(): void {
    const dialogRef = this.dialog.open(DialogContactComponent, {
      width: '250px',
      data: {
        lastnameContact: this.lastnameContact,
        emailContact: this.emailContact,
        phoneContact: this.phoneContact,
        textContact: this.textContact,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
      this._snackBar.open("Votre demande à bien été envoyée.", "Fermer");
    });
  }

  openInscription(): void {
    const dialogRef = this.dialog.open(DialogInscriptionComponent, {
      width: '250px',
      data: {
        firstnameInscription: this.firstnameInscription,
        lastnameInscription: this.lastnameInscription,
        emailInscription: this.emailInscription}
    });

    dialogRef.afterClosed().subscribe(result => {
      //contenu de result : Object { firsnameInscription: "value", lastnameInscription : "value", emailInscription: "value"}
      if (result !== undefined)
      this._snackBar.open("Votre demande à bien été envoyée.", "Fermer");
    });
  }

  openIdentifier(): void {
    const dialogRef = this.dialog.open(DialogIdentifierComponent, {
      width: '250px',
      data: {emailIdentifier: this.emailIdentifier, passwordIdentifier: this.passwordIdentifier}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emailIdentifier = result;
      console.log("data output:", result);
      // this.goTo();
    });
  }

  //email : CHoeger@yahoo.com
  //id : 129

  // goTo():void {
  //   let result = 0;
  //   for (let i=1; i<22;i++){
  //   this.httpClient.get<UserList>('http://localhost:8000/api/users?page=' + i).subscribe((data:any) => {
  //     this.user = data['hydra:member'].concat(this.user);
  //   });
  //   console.log(this.user);
  //   console.log(this.user[0].email);
  //   for(let j=0;j<this.user.length;j++){
  //     if (this.user[j].email == this.emailIdentifier){
  //       result = this.user[j].id;
  //       this.router.navigate(["profileLinks/", result]);
  //     } else {
  //       j++;
  //     }
  //   } 
  // }
// }
}