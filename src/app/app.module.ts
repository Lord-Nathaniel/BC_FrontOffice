import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { InterceptorService } from './loader/interceptor.service';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { MainListComponent } from './main/main-list/main-list.component';
import { MainViewComponent } from './main/main-view/main-view.component';
import { MainHomepageComponent } from './main/main-homepage/main-homepage.component';
import { MainCatalogComponent } from './main/main-catalog/main-catalog.component';

import { ProfileLinksComponent } from './profile/profile-links/profile-links.component';
import { ProfileInfosComponent } from './profile/profile-infos/profile-infos.component';
import { ProfileLinksBlankComponent } from './profile/profile-links-blank/profile-links-blank.component';
import { ProfileInfosBlankComponent } from './profile/profile-infos-blank/profile-infos-blank.component';

import { LegalFaqComponent } from './legal/legal-faq/legal-faq.component';
import { LegalWhoareweComponent } from './legal/legal-whoarewe/legal-whoarewe.component';
import { LegalMentionsComponent } from './legal/legal-mentions/legal-mentions.component';
import { LegalPoliticaltermsComponent } from './legal/legal-politicalterms/legal-politicalterms.component';
import { LegalGCUComponent } from './legal/legal-gcu/legal-gcu.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { UserLightFormComponent } from './forms/user-light-form/user-light-form.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { CarFormComponent } from './forms/car-form/car-form.component';
import { ProfileGaragesComponent } from './profile/profile-garages/profile-garages.component';
import { ProfileCarsComponent } from './profile/profile-cars/profile-cars.component';
import { ProfileCarsBlankComponent } from './profile/profile-cars-blank/profile-cars-blank.component';
import { ProfileGaragesBlankComponent } from './profile/profile-garages-blank/profile-garages-blank.component';
import { GarageFormComponent } from './forms/garage-form/garage-form.component';
import { DialogIdentifierComponent } from './navbar/dialog-identifier/dialog-identifier.component';
import { DialogContactComponent } from './navbar/dialog-contact/dialog-contact.component';
import { DialogInscriptionComponent } from './navbar/dialog-inscription/dialog-inscription.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminGaragesComponent } from './admin/admin-garages/admin-garages.component';
import { AdminCarsComponent } from './admin/admin-cars/admin-cars.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    MainViewComponent,
    MainHomepageComponent,
    NavbarComponent,
    ProfileLinksComponent,
    ProfileInfosComponent,
    ProfileLinksBlankComponent,
    ProfileInfosBlankComponent,
    MainCatalogComponent,
    LegalFaqComponent,
    LegalWhoareweComponent,
    LegalMentionsComponent,
    LegalPoliticaltermsComponent,
    LegalGCUComponent,
    UserLightFormComponent,
    UserFormComponent,
    CarFormComponent,
    ProfileGaragesComponent,
    ProfileCarsComponent,
    ProfileCarsBlankComponent,
    ProfileGaragesBlankComponent,
    GarageFormComponent,
    DialogIdentifierComponent,
    DialogContactComponent,
    DialogInscriptionComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminGaragesComponent,
    AdminCarsComponent,
    AdminLoginComponent
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NgxBootstrapSliderModule,
    NgxSliderModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
