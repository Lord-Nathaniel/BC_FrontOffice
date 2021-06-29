import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CarList } from '../../Models/car-list';
import { CarJsonld } from '../../Models/car-jsonld';
import { CarListFilter } from '../../Models/car-list-filter';
import { ConstraintViolationList } from 'src/app/Models/constraint-violation-list';
import { MarqueJsonld } from 'src/app/Models/marque-jsonld';
import { MarqueList } from 'src/app/Models/marque-list';
import { ModeleJsonld } from 'src/app/Models/modele-jsonld';
import { ModeleList } from 'src/app/Models/modele-list';
import { EnergyList } from 'src/app/Models/energy-list';
import { EnergyJsonld } from 'src/app/Models/energy-jsonld';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  public cars: Array<CarJsonld> = [];
  public marques: Array<MarqueJsonld> = [];
  public tempMarques: Array<MarqueJsonld> = [];
  public modeles: Array<ModeleJsonld> = [];
  public modelesSelected: Array<ModeleJsonld> = [];
  public energies: Array<EnergyJsonld> = [];

  public show: number = 0;

  public prevLink: string|null = null;
  public nextLink: string|null = null;
  public firstPage: number|null = null;
  public lastPage: number|null = null;
  public violationList: ConstraintViolationList|null = null;
  public warningDelete : boolean = true;

  public modeleDisabled : boolean = true;
  public displayMarque : string = "Marque";
  public displayModele : string = "Veuillez choisir une marque";
  public displayEnergy : string = "Carburant";

  public maxPagesMarques: number = 1;

  public valueYearMin: number = 2000;
  public valueYearMax: number = 2021;
  optionsYear: Options = {
    floor : 2000,
    step : 5,
    ceil: 2021,
    showTicks: true
  }

  public valueKmMin: number = 0;
  public valueKmMax: number = 500000;
  optionsKm: Options = {
    floor : 0,
    step : 50000,
    ceil: 500000,
    showTicks: true
  }

  public valuePriceMin: number = 0;
  public valuePriceMax: number = 50000;
  optionsPrice: Options = {
    floor : 0,
    step : 5000,
    ceil: 50000,
    showTicks: true
  }

  public carQuantity: number|null=null;

  public filters: CarListFilter = {
    name: '',
    price: '',
    km: '',
    year: '',
    modele: '',
    garage: '',
    energy: ''
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.loadPage('/api/cars?page=1');

    this.loadFilterData();
  }

  public delete(carid:number): void{
    if (this.warningDelete === true){
      alert ("Vous êtes sur le point de supprimer définitivement cet utilisateur !");
      this.warningDelete = false;
    } else {
      this.httpClient.delete('http://localhost:8000/api/cars/' + carid).subscribe({
        next : () => {
          this.loadPage('/api/cars?page=1');
        },
        error : (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.violationList = err.error;
            alert (err.error['hydra:description']);
          } else {
            alert (err.status + "An error as occured");
          }
        }
      });
      this.warningDelete = true;
    }
  }

  public applyFilters(page: number = 1): void {
    let url = '/api/cars?page=' + page;

    for (const key of Object.keys(this.filters)) {
      if (key in this.filters) {
        const val = this.filters[key as keyof CarListFilter];

        if (val !== '') {
          url += '&' + key + '=' + val;
        }
      }
    }
    this.loadPage(url);
  }

  public loadNextPage(): void {
    if (this.nextLink !== null) {
      this.loadPage(this.nextLink);
    }
  }

  public loadPreviousPage(): void {
    if (this.prevLink !== null) {
      this.loadPage(this.prevLink);
    }
  }

  public loadFirstPage(): void {
    if (this.firstPage !== null) {
      this.loadPage('/api/cars?page=' + this.firstPage);
    }
  }
  public loadLastPage(): void {
    if (this.lastPage !== null) {
      this.loadPage('/api/cars?page=' + this.lastPage);
    }
  }

  public loadPageByNumber(pageNumber: number): void {
    this.applyFilters(pageNumber);
  }

  public get getPageNumbers(): Array<number> {
    const arr: Array<number> = [];
    const regex = /\?.*page=([0-9]+)/;
    if (this.nextLink !== null && this.prevLink === null) {
      let matches = (this.nextLink).match(regex);
      if (matches !== null){
      for (let i = parseInt(matches[1]); i <= parseInt(matches[1]) + 3; i++) {
        arr.push(i);
      }
      }
    } else if (this.nextLink !== null) {
      let matches = (this.nextLink).match(regex);
      if (matches !== null && this.lastPage !==null){
      for (let i = parseInt(matches[1]) - 2; i <= parseInt(matches[1]) + 3; i++) {
        if (i <= this.lastPage){
        arr.push(i);
        }
        }
      }
    } else if (this.nextLink === null && this.prevLink !== null) {
      let matches = (this.prevLink).match(regex);
      if (matches !== null){
      for (let i = parseInt(matches[1]) - 4; i <= parseInt(matches[1]); i++) {
        arr.push(i);
      }
      }
    }
    return arr;
  }

  private loadPage(page: string):void {

    this.httpClient.get<CarList>('http://localhost:8000' + page).subscribe((data:any) => {
      this.cars = data['hydra:member'];
      this.carQuantity = data['hydra:totalItems'];

      if (data['hydra:view']['hydra:next'] === undefined) {
        this.nextLink = null;
      } else {
        this.nextLink = data['hydra:view']['hydra:next'];
      }

      if (data['hydra:view']['hydra:previous'] === undefined) {
        this.prevLink = null;
      } else {
        this.prevLink = data['hydra:view']['hydra:previous'];
      }

      if (data['hydra:view']['hydra:first'] === undefined) {
        this.firstPage = null;
      } else {
        const regex = /\?.*page=([0-9]+)/;
        const str = data['hydra:view']['hydra:first'];
        const matches = str.match(regex);

        if (matches === null) {
          this.firstPage = null;
        } else {
          this.firstPage = parseInt(matches[1]);
        }
      }

      if (data['hydra:view']['hydra:last'] === undefined) {
        this.lastPage = null;
      } else {
        const regex = /\?.*page=([0-9]+)/;
        const str = data['hydra:view']['hydra:last'];
        const matches = str.match(regex);

        if (matches === null) {
          this.lastPage = null;
        } else {
          this.lastPage = parseInt(matches[1]);
        }
      }
    });

    

  }

  private loadFilterData():void {
    
    for (let i=1;i<4;i++){
      this.httpClient.get<MarqueList>('http://localhost:8000/api/marques?page=' + i).subscribe((data:any) => {
        this.marques = data['hydra:member'].concat(this.marques);
      });
    };
    for (let i=1; i<22;i++){
      this.httpClient.get<ModeleList>('http://localhost:8000/api/modeles?page=' + i).subscribe((data:any) => {
        this.modeles = data['hydra:member'].concat(this.modeles);
      });
    };
    this.httpClient.get<EnergyList>('http://localhost:8000/api/energies').subscribe((data:any) => {
      this.energies = data['hydra:member'];
    });
  }

  public marque_selected(marqueNumber:number, marqueName:string){
    this.displayMarque = marqueName;
    this.modeleDisabled = false;
    this.displayModele = "Modele";
    this.modelesSelected=[];
    let marqueUrl = "/api/marques/"+marqueNumber;
    
    for(let i=0;i<this.modeles.length;i++){
      if (this.modeles[i].marque == marqueUrl){
        this.modelesSelected.push(this.modeles[i])
      }
    }
  }

  public modele_selected(modeleNumber:number, modeleName:string){
    this.displayModele =modeleName;
  }

  public energy_selected(energyNumber:number, energyName:string){
    this.displayEnergy = energyName;
  }


}
