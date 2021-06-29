import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ConstraintViolationList } from 'src/app/Models/constraint-violation-list';
import { User } from 'src/app/Models/user';
import { UserJsonld } from 'src/app/Models/user-jsonld';

@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.component.html',
  styleUrls: ['./profile-infos.component.css']
})
export class ProfileInfosComponent implements OnInit {

  public user: UserJsonld|null = null;

  public violationList: ConstraintViolationList|null = null;

  constructor(private httpClient: HttpClient,public activatedRoute: ActivatedRoute, private themeService: ThemeService, 
    private router: Router,) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

   public isDarkMode:boolean;
   public userId:string = '';

  ngOnInit(): void {
     // Retrieve params from path URL (defined in app-routing.module.ts).
     this.activatedRoute.params.subscribe((params) => {
      // params.YOUR_VAR
      this.httpClient.get<UserJsonld>('http://localhost:8000/api/users/' + params.id).subscribe({
        next: (user: UserJsonld) => {
          this.user = user;
        },
        error: (err: HttpErrorResponse) => {
          // You have to handle error better than this ;) .
          alert(err.status + ' - ' + err.statusText);
        },
      });
    }); 

    let location = (window.location.href).toString();
        //in location : http://localhost:4200/profileLinks/128
    let urlCut = location.match(/profileInfos\/([0-9]+)/);
        //in urlCut : [0] : profileLinks/128
        //            [1] : 128
    if (urlCut !== null)
      this.userId = urlCut[1];
}

public submit(user: User): void {
  this.httpClient.put<UserJsonld>('http://localhost:8000/api/users/' + this.user?.id, user).subscribe({
    next: (createdUser) => {
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
