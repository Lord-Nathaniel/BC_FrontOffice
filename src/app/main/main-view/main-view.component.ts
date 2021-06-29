import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarJsonld } from 'src/app/Models/car-jsonld';
import { ThemeService } from '../../core/services/theme.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogContactComponent } from 'src/app/navbar/dialog-contact/dialog-contact.component';
import { EnergyJsonld } from 'src/app/Models/energy-jsonld';
import { ModeleJsonld } from 'src/app/Models/modele-jsonld';
import { MarqueJsonld } from 'src/app/Models/marque-jsonld';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  public viewCar: CarJsonld = {
    '@id': '',
    '@type': '',
    '@context': '',
    id: 0,
    name: '',
    description: '',
    adDate: '',
    price: '',
    km: '',
    year: '',
    isSold: false,
    modele: '',
    garage: '',
    energy: '',
    images: [
      ''
    ]
  }
  public isDarkMode:boolean;
  
  public lastnameContact: string= '';
  public emailContact: string= '';
  public phoneContact: string= '';
  public textContact: string= '';

  public energyUrl: any;
  public modeleUrl: any;
  public marqueUrl: any;

  public date: any;
  public marque: any;

  constructor(
    private httpClient: HttpClient,
    public activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit(): void {
    this.loadAd();
  }

  private loadAd(): void {
    this.activatedRoute.params.subscribe( (params) => {
      this.httpClient.get<CarJsonld>('http://localhost:8000/api/cars/' + params.id).subscribe( {
      next: (car : CarJsonld) => {
        this.viewCar = car;
        // this.date = car.adDate.match(/T\/([0-9]+)/);

        //redaction de la date
        let dateTemp = car.adDate;
        let dateSort = dateTemp.match(/.+?(?=T)/);
        if(dateSort !== null){
        this.date = dateSort;
        }

        //prevision des eventuels null
        if(this.viewCar.description === null){
          this.viewCar.description = "Pas de description pour cette annonce";
        }
        if(this.viewCar.price === null){
          this.viewCar.price = "N/A";
        }
        if(this.viewCar.km === null){
          this.viewCar.km = "N/A";
        }
        if(this.viewCar.year === null){
          this.viewCar.year = "N/A";
        }
        
        //recherche du nom de l'energy
        this.energyUrl = this.viewCar.energy.match(/energies\/([0-9]+)/);
        if (this.energyUrl !== null){
          this.httpClient.get<EnergyJsonld>('http://localhost:8000/api/energies/' + this.energyUrl[1]).subscribe({
                  next: (energy: EnergyJsonld) => {
                this.viewCar.energy = energy.name;
                  }  
          });
        }
        
        //recherche du nom du modèle
        this.modeleUrl = this.viewCar.modele.match(/modeles\/([0-9]+)/);
        if (this.modeleUrl !== null){
          this.httpClient.get<ModeleJsonld>('http://localhost:8000/api/modeles/' + this.modeleUrl[1]).subscribe({
            next: (modele: ModeleJsonld) => {
            this.viewCar.modele = modele.name;
            this.marqueUrl = modele.marque.match(/marques\/([0-9]+)/);

              //recherche du nom de la marque
              if (this.marqueUrl !== null){
                this.httpClient.get<MarqueJsonld>('http://localhost:8000/api/marques/' + this.marqueUrl[1]).subscribe({
                  next: (marque: MarqueJsonld) => {
                    this.marque = marque.name;
                  }  
                });
              }

            }  
          });
        }
    
    

      }
      });
    });    
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
}