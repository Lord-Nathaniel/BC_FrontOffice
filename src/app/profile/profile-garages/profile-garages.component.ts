import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ConstraintViolationList } from 'src/app/Models/constraint-violation-list';
import { Garage } from 'src/app/Models/garage';
import { GarageJsonld } from 'src/app/Models/garage-jsonld';
import { UserJsonld } from 'src/app/Models/user-jsonld';

@Component({
  selector: 'app-profile-garages',
  templateUrl: './profile-garages.component.html',
  styleUrls: ['./profile-garages.component.css']
})
export class ProfileGaragesComponent implements OnInit {

  public user: UserJsonld|null = null;
  public garage: GarageJsonld|null = null;
  public garageArray: Array<GarageJsonld>= [];

  public violationList: ConstraintViolationList|null = null;

  constructor(private httpClient: HttpClient,public activatedRoute: ActivatedRoute, private themeService: ThemeService, 
    private router: Router,) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

   public isDarkMode:boolean;
   public userId:string = '';
   public garageId:string = '';
   public userGarageLength:number = 0;


  ngOnInit(): void {
     // Retrieve params from path URL (defined in app-routing.module.ts).
     this.activatedRoute.params.subscribe((params) => {
      // params.YOUR_VAR
      this.httpClient.get<UserJsonld>('http://localhost:8000/api/users/' + params.id).subscribe({
        next: (user: UserJsonld) => {
          //récupère le user
          this.user = user;
          this.userGarageLength = this.user.garages.length;

          //pour chaque garage appartenant au user
          for (let i=0; i< this.user.garages.length; i++)
          {
            let tempId = this.user.garages[i].match(/garages\/([0-9]+)/);
            if(tempId !== null) {
              this.garageId = tempId[1];
            }
            this.httpClient.get<GarageJsonld>('http://localhost:8000/api/garages/' + this.garageId).subscribe({
              next: (garage: GarageJsonld) => {
                if (garage !== null) {
                this.garageArray[i] = garage;
                }
              },
              error: (err: HttpErrorResponse) => {
                // You have to handle error better than this ;) .
                alert(err.status + ' - ' + err.statusText);
              }
            })
          }
        },
        error: (err: HttpErrorResponse) => {
          // You have to handle error better than this ;) .
          alert(err.status + ' - ' + err.statusText);
        },
      });
    }); 


    let location = (window.location.href).toString();
        //in location : http://localhost:4200/profileLinks/128
    let urlCut = location.match(/profileGarages\/([0-9]+)/);
        //in urlCut : [0] : profileLinks/128
        //            [1] : 128
    if (urlCut !== null)
      this.userId = urlCut[1];
}

public submit(garage: Garage): void {
  this.httpClient.put<GarageJsonld>('http://localhost:8000/api/garages/' + this.garage?.id, garage).subscribe({
    next: (createdGarages) => {
      // this.router.navigate(['/adminAd']);
    },
    error: (err: HttpErrorResponse) => {
      if (err.status === 422) {
        this.violationList = err.error;
      } else {
        alert(err.status + ' - An error occurred.');
      }
    },
  });
}

}
