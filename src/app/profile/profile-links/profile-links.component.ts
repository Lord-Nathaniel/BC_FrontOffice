import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-profile-links',
  templateUrl: './profile-links.component.html',
  styleUrls: ['./profile-links.component.css']
})
export class ProfileLinksComponent implements OnInit {

  constructor(private httpClient: HttpClient,public activatedRoute: ActivatedRoute, private themeService: ThemeService, 
    private router: Router,) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

   public isDarkMode:boolean;
   public userId:string = '';

  ngOnInit(): void {

    let location = (window.location.href).toString();
        //in location : http://localhost:4200/profileLinks/128
    let urlCut = location.match(/profileLinks\/([0-9]+)/);
        //in urlCut : [0] : profileLinks/128
        //            [1] : 128
    if (urlCut !== null)
      this.userId = urlCut[1];
  }

}
