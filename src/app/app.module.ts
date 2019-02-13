import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { VerifyComponent } from './components/verify/verify.component';
import { PeopleComponent } from './components/people/people.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { EventsComponent } from './components/events/events.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MybusinessComponent } from './components/mybusiness/mybusiness.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PitchbookComponent } from './components/pitchbook/pitchbook.component';
import { InvestmentRequestComponent } from './components/investment-request/investment-request.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { InvestmentoppComponent } from './components/investmentopp/investmentopp.component';
import { BusinessComponent } from './components/business/business.component';
import { EInvoiceComponent } from './components/e-invoice/e-invoice.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { RequestComponent } from './components/request/request.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddinvoiceComponent } from './components/addinvoice/addinvoice.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PalnsComponent } from './components/palns/palns.component';
import { OrgProfileComponent } from './components/org-profile/org-profile.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AuthService } from './provider/auth.service';
import { EventsService } from './services/events.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { InitialpageComponent } from './components/initialpage/initialpage.component';
import { OrgloginComponent } from './components/orglogin/orglogin.component';
import { OrganisationService } from './services/organisation.service';
import { ManageorganisationComponent } from './components/manageorganisation/manageorganisation.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NotifierModule } from 'angular-notifier';
import { JoinprogComponent } from './components/joinprog/joinprog.component';
import {ToastrModule } from 'ngx-toastr';
import { ToastsComponent } from './components/toasts/toasts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





const app_routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate:[AuthGuard] },
  { path: 'welcome', component : InitialpageComponent},
  { path: 'create_organisation', component : OrgloginComponent},
  { path: 'manage_organisation', component : ManageorganisationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'forgotPassword', component: ForgotpassComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'people', component: PeopleComponent, canActivate:[AuthGuard] },
  { path: 'opportunities', component: OpportunitiesComponent , canActivate:[AuthGuard]},
  { path: 'events', component: EventsComponent, canActivate:[AuthGuard] },
  { path: 'settings', component: SettingsComponent , canActivate:[AuthGuard]},
  { path: 'notifications', component: NotificationsComponent , canActivate:[AuthGuard]},
  { path: 'chat', component: ChatComponent, canActivate:[AuthGuard] },
  { path: 'chat/:id', component: ChatComponent, canActivate:[AuthGuard] },
  { path: 'my_businesses', component: MybusinessComponent, canActivate:[AuthGuard] },
  { path: 'business/:id', component: BusinessComponent, canActivate:[AuthGuard] },
  { path: 'business', component: BusinessComponent , canActivate:[AuthGuard]},
  { path: 'pitchbook/:id', component: PitchbookComponent, canActivate:[AuthGuard] }, 
  { path: 'search', component: SearchComponent, canActivate:[AuthGuard] },
  { path: 'investiment_opportunities', component: InvestmentoppComponent , canActivate:[AuthGuard]},
  { path: 'investmentrequest', component: InvestmentRequestComponent , canActivate:[AuthGuard]},
  { path: 'einvoice/:id', component: EInvoiceComponent, canActivate:[AuthGuard]},
  { path: 'add_invoice/:id', component: AddinvoiceComponent, canActivate:[AuthGuard]},
  { path: 'Product', component: ProductComponent, canActivate:[AuthGuard]},
  { path: 'request', component: RequestComponent, canActivate:[AuthGuard]},
  { path: 'addinvoice/:id', component: AddinvoiceComponent, canActivate:[AuthGuard]},
  { path: 'organisations', component : OrganisationsComponent, canActivate:[AuthGuard]},
  { path: 'organisation/:id', component : OrganisationComponent, canActivate:[AuthGuard]},
  { path: 'user/:id', component : UserProfileComponent, canActivate:[AuthGuard]},
  { path: 'plans', component : PalnsComponent, canActivate:[AuthGuard]},
  { path: 'org_profile', component : OrgProfileComponent, canActivate:[AuthGuard]},
  { path: 'toast', component : ToastsComponent, canActivate:[AuthGuard]},
  { path: 'join_imuka_program/:id/:type', component : JoinprogComponent, canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    FeedsComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    VerifyComponent,
    PeopleComponent,
    ChatComponent,
    NotificationsComponent,
    EventsComponent,
    OpportunitiesComponent,
    SettingsComponent,
    ProfileComponent,
    MybusinessComponent,
    PitchbookComponent,
    InvestmentRequestComponent,
    ProductComponent,
    SearchComponent,
    InvestmentoppComponent,
    BusinessComponent,
    EInvoiceComponent,
    RequestComponent,
    AddinvoiceComponent,
    OrganisationsComponent,
    OrganisationComponent,
    RequestComponent,
    UserProfileComponent,
    PalnsComponent,
    OrgProfileComponent,
    InitialpageComponent,
    OrgloginComponent,
    ManageorganisationComponent,
    JoinprogComponent,
    ToastsComponent,
   
  ],
 
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot(app_routes), 
    AngularFontAwesomeModule, 
    CarouselModule.forRoot(), 
    TabsModule.forRoot(), 
    AccordionModule.forRoot(), 
    ModalModule.forRoot(), 
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    NotifierModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],

  providers: [AuthService, EventsService, AuthGuard, OrganisationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
