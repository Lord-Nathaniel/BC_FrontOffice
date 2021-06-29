import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';
import { CarList } from 'src/app/Models/car-list';
import { GarageList } from 'src/app/Models/garage-list';
import { UserList } from 'src/app/Models/user-list';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private httpClient: HttpClient,public activatedRoute: ActivatedRoute, private themeService: ThemeService, 
    private router: Router,) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

   public isDarkMode:boolean;
   public userId:string = '';

   public users:number = 0;
   public garages:number =0;
   public cars:number = 0;

   ngOnInit(): void {
 
     let location = (window.location.href).toString();
         //in location : http://localhost:4200/profileLinks/128
     let urlCut = location.match(/profileLinks\/([0-9]+)/);
         //in urlCut : [0] : profileLinks/128
         //            [1] : 128
     if (urlCut !== null)
       this.userId = urlCut[1];


    this.httpClient.get<UserList>('http://localhost:8000/api/users?page=1').subscribe((data)=>{
    this.users = data['hydra:totalItems'];});

    this.httpClient.get<GarageList>('http://localhost:8000/api/garages?page=1').subscribe((data)=>{
    this.garages = data['hydra:totalItems'];});

    this.httpClient.get<CarList>('http://localhost:8000/api/cars?page=1').subscribe((data)=>{
    this.cars = data['hydra:totalItems'];});

   }

}
