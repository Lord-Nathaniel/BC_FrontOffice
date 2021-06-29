import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ConstraintViolationList } from 'src/app/Models/constraint-violation-list';
import { UserJsonld } from 'src/app/Models/user-jsonld';
import { UserList } from 'src/app/Models/user-list';
import { UserListFilter } from 'src/app/Models/user-list-filter';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private httpClient: HttpClient,public activatedRoute: ActivatedRoute, private themeService: ThemeService, 
    private router: Router,) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

   public isDarkMode:boolean;
   public userId:string = '';

   ngOnInit(): void {
 
    this.loadPage('/api/users?page=1');

     let location = (window.location.href).toString();
         //in location : http://localhost:4200/profileLinks/128
     let urlCut = location.match(/profileLinks\/([0-9]+)/);
         //in urlCut : [0] : profileLinks/128
         //            [1] : 128
     if (urlCut !== null)
       this.userId = urlCut[1];
   }

  public users: Array<UserJsonld>=[];
  
  public prevLink: string|null = null;
  public nextLink: string|null = null;
  public firstPage: number|null = null;
  public lastPage: number|null = null;
  public violationList: ConstraintViolationList|null = null;
  public warningDelete : boolean = true;

  public userQuantity: number|null=null;

  public filters: UserListFilter = {
    email: '',
    garages: [''],
    firstname: '',
    lastname: '',
    username: '',
    roles: [''],
    password: '',
    salt: ''
  };

  public delete(userid:number): void{
    if (this.warningDelete === true){
      alert ("Vous êtes sur le point de supprimer définitivement cette annonce !");
      this.warningDelete = false;
    } else {
      this.httpClient.delete('http://localhost:8000' + userid).subscribe({
        next : () => {
          this.loadPage('/api/users?page=1');
        },
        error : (err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.violationList = err.error;
            alert ("Veuillez vous connecter avant de supprimer cette annonce !");
          } else if (err.status === 404) {
            this.violationList = err.error;
            alert (err.error['hydra:description']);
          } else  {
            alert (err.status + "An error as occured");
          }
        }
      });
      this.warningDelete = true;
    }
  }

  public applyFilters(page: number=1):void{
    let url = '/api/users?page='+page;
    
    for (const key of Object.keys(this.filters)){
      if (key in this.filters){
        const val = this.filters[key as keyof UserListFilter];

        if (val !== ''){
          url += '&' + key + '=' +val;
        }
      }
    }

    this.loadPage(url);
  }

  public loadNextPage():void{
    if (this.nextLink !== null){
      this.loadPage(this.nextLink);
    }
  }

  public loadPreviousPage():void{
    if (this.prevLink !== null){
      this.loadPage(this.prevLink);
    }
  }

  public loadFirstPage(): void {
    if (this.firstPage !== null) {
      this.loadPage('/api/users?page=' + this.firstPage);
    }
  }
  public loadLastPage(): void {
    if (this.lastPage !== null) {
      this.loadPage('/api/users?page=' + this.lastPage);
    }
  }

  public loadPageByNumber(pageNumber: number): void{
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

  private loadPage(page:string) : void {
    this.httpClient.get<UserList>('http://localhost:8000' + page).subscribe((data)=>{
      this.users = data['hydra:member'];
      this.userQuantity = data['hydra:totalItems'];

      if (data['hydra:view']['hydra:next'] === undefined){
        this.nextLink = null;
      } else {  
        this.nextLink = data['hydra:view']['hydra:next'];
      }

      if (data['hydra:view']['hydra:previous'] === undefined){
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

      if (data['hydra:view']['hydra:last'] === undefined){
        this.lastPage = null;
      } else {
        const regex = /\?.*page=([0-9]+)/;
        const str = data['hydra:view']['hydra:last'];
        const matches = str.match(regex);
        if (matches === null) {
          this.lastPage= null;
        } else {
          this.lastPage = parseInt(matches[1]);
        }
      }

    });
  }  
}
