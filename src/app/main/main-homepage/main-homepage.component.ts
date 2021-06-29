import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThemeService } from '../../core/services/theme.service';
import { CarList } from 'src/app/Models/car-list';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.css']
})
export class MainHomepageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private themeService: ThemeService) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

   public isDarkMode:boolean;
   public cars:number=0;

  ngOnInit(): void {
    this.httpClient.get<CarList>('http://localhost:8000/api/cars?page=1').subscribe((data)=>{
      this.cars = data['hydra:totalItems'];
    })
    
  }

}
