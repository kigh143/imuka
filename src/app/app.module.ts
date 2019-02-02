import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainmenuComponent } from "./components/mainmenu/mainmenu.component";
import { FeedsComponent } from "./components/feeds/feeds.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ForgotpassComponent } from "./components/forgotpass/forgotpass.component";
import { VerifyComponent } from "./components/verify/verify.component";
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
import { EventsService } from "./services/events.service";
import { HttpModule }from "@angular/http";


const app_routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "verify", component: VerifyComponent },
  { path: "forgotPassword", component: ForgotpassComponent },
  { path: "dashboard", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "people", component: PeopleComponent },
  { path: "opportunities", component: OpportunitiesComponent },
  { path: "events", component: EventsComponent },
  { path: "settings", component: SettingsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "chat", component: ChatComponent },
  { path: "chat/:id", component: ChatComponent },
  { path: "my_businesses", component: MybusinessComponent },
  { path: "business/:id", component: BusinessComponent },
  { path: "business", component: BusinessComponent },
  { path: "pitchbook/:id", component: PitchbookComponent }, 
  { path: "search", component: SearchComponent },
  { path: "investiment_opportunities", component: InvestmentoppComponent},
  { path: "investmentrequest", component: InvestmentRequestComponent},
  { path: "einvoice/:id", component: EInvoiceComponent},
  { path: "add_invoice/:id", component: AddinvoiceComponent},
  { path: "Product", component: ProductComponent},
  { path: "request", component: RequestComponent},
  { path: "addinvoice/:id", component: AddinvoiceComponent},
  { path: "organisations", component : OrganisationsComponent},
  { path: "organisation/:id", component : OrganisationComponent},
  { path: "user/:id", component : UserProfileComponent},
  { path: "plans", component : PalnsComponent},
  { path: "org_profile", component : OrgProfileComponent},
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
    OrgProfileComponent
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
    BsDatepickerModule.forRoot()
  ],

  providers: [AuthService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
