import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';
import { CarJsonld } from 'src/app/Models/car-jsonld';
import { ConstraintViolationList } from 'src/app/Models/constraint-violation-list';
import { Car } from 'src/app/Models/car';
import { GarageJsonld } from 'src/app/Models/garage-jsonld';
import { UserJsonld } from 'src/app/Models/user-jsonld';

@Component({
  selector: 'app-profile-cars',
  templateUrl: './profile-cars.component.html',
  styleUrls: ['./profile-cars.component.css']
})
export class ProfileCarsComponent implements OnInit {

  public user: UserJsonld|null = null;
  public garage: GarageJsonld|null = null;
  public garageArray: Array<GarageJsonld>= [];
  public car: CarJsonld|null = null;
  public carArray: Array<CarJsonld>= [];

  public violationList: ConstraintViolationList|null = null;

  constructor(private httpClient: HttpClient,public activatedRoute: ActivatedRoute, private themeService: ThemeService, 
    private router: Router,) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

   public isDarkMode:boolean;
   public userId:string = '';
   public garageId:string = '';
   public carId:string = '';
   public userGarageLength:number = 0;
   public userGarageCarLength:number = 0;


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
                  //récupère le i-ème garage
                  this.garage = garage;
                  this.garageArray[i] = garage;
                  this.userGarageCarLength += this.garage.cars.length;
                  console.log(this.userGarageCarLength);
                  //pour chaque car appartenant au garage
                  for (let j=0; j< this.garage.cars.length; j++)
                  {
                    console.log("entrée 1");
                    let tempoId = this.garage.cars[j].match(/cars\/([0-9]+)/);
                    console.log("tempoId" + tempoId);
                    
                    if(tempoId !== null) {
                      this.carId = tempoId[1];
                    }  
                    this.httpClient.get<CarJsonld>('http://localhost:8000/api/cars/' + this.carId).subscribe({
                      next: (car: CarJsonld) => {
                        console.log("entrée 2");
                        if (car !== null) {
                          //récupère le i-ème garage
                          this.car = car;
                          this.carArray[j] = car;
                          console.log(this.car);
                          console.log(this.carArray);
                        }
                      },
                      error: (err: HttpErrorResponse) => {
                        // You have to handle error better than this ;) .
                        alert(err.status + ' - ' + err.statusText);
                      }
                    })
                  }
                }
              },
              error: (err: HttpErrorResponse) => {
                // You have to handle error better than this ;) .
                alert(err.status + ' - ' + err.statusText);
              }
            });
          }
        },
        error: (err: HttpErrorResponse) => {
          // You have to handle error better than this ;) .
          alert(err.status + ' - ' + err.statusText);
        }  
      }); 
    });  

    let location = (window.location.href).toString();
        //in location : http://localhost:4200/profileLinks/128
    let urlCut = location.match(/profileCars\/([0-9]+)/);
        //in urlCut : [0] : profileLinks/128
        //            [1] : 128
    if (urlCut !== null)
      this.userId = urlCut[1];
}

public submit(car: Car): void {
  this.httpClient.put<CarJsonld>('http://localhost:8000/api/cars/' + this.car?.id, car).subscribe({
    next: (createdCars) => {
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
