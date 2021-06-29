import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-profile-infos-blank',
  templateUrl: './profile-infos-blank.component.html',
  styleUrls: ['./profile-infos-blank.component.css']
})
export class ProfileInfosBlankComponent implements OnInit {

  public userid: number|null = null;
  public isDarkMode:boolean;

  constructor(public activatedRoute: ActivatedRoute, private themeService: ThemeService,     private router: Router,) {
    this.themeService.initColorTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

  ngOnInit(): void {
  }

  public check(): void {
    if (this.userid != null){
    this.router.navigate(["/profileInfos/", this.userid]);
    }
  }

}
