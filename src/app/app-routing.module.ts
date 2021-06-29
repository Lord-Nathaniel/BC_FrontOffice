import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomepageComponent } from './main/main-homepage/main-homepage.component';
import { MainListComponent } from './main/main-list/main-list.component';
import { MainViewComponent } from './main/main-view/main-view.component';
import { MainCatalogComponent } from './main/main-catalog/main-catalog.component';

import { ProfileInfosComponent } from './profile/profile-infos/profile-infos.component';
import { ProfileLinksComponent } from './profile/profile-links/profile-links.component';
import { ProfileGaragesComponent } from './profile/profile-garages/profile-garages.component';
import { ProfileCarsComponent } from './profile/profile-cars/profile-cars.component';
import { ProfileLinksBlankComponent } from './profile/profile-links-blank/profile-links-blank.component';
import { ProfileInfosBlankComponent } from './profile/profile-infos-blank/profile-infos-blank.component';
import { ProfileGaragesBlankComponent } from './profile/profile-garages-blank/profile-garages-blank.component';
import { ProfileCarsBlankComponent } from './profile/profile-cars-blank/profile-cars-blank.component';

import { LegalFaqComponent } from './legal/legal-faq/legal-faq.component';
import { LegalWhoareweComponent } from './legal/legal-whoarewe/legal-whoarewe.component';
import { LegalMentionsComponent } from './legal/legal-mentions/legal-mentions.component';
import { LegalPoliticaltermsComponent } from './legal/legal-politicalterms/legal-politicalterms.component';
import { LegalGCUComponent } from './legal/legal-gcu/legal-gcu.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const routes: Routes = [
  {path:'', component:MainHomepageComponent},
  {path:'mainList', component:MainListComponent},
  {path:'mainView/:id', component:MainViewComponent},
  {path:'mainCatalog', component:MainCatalogComponent},
  {path:'profileInfos', component:ProfileInfosBlankComponent},
  {path:'profileInfos/:id', component:ProfileInfosComponent},
  {path:'profileLinks', component:ProfileLinksBlankComponent},
  {path:'profileLinks/:id', component:ProfileLinksComponent},
  {path:'profileGarages', component:ProfileGaragesBlankComponent},
  {path:'profileGarages/:id', component:ProfileGaragesComponent},
  {path:'profileCars', component:ProfileCarsBlankComponent},
  {path:'profileCars/:id', component:ProfileCarsComponent},
  {path:'legalFaq', component:LegalFaqComponent},
  {path:'legalWhoarewe', component:LegalWhoareweComponent},
  {path:'legalMentions', component:LegalMentionsComponent},
  {path:'legalPoliticalTerms', component:LegalPoliticaltermsComponent},
  {path:'legalGCU', component:LegalGCUComponent},
  {path:'adminLogin', component:AdminLoginComponent},
  {path:'adminDashboard/:id', component:AdminDashboardComponent},
  {path:'adminUsers/:id', component:AdminUsersComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
