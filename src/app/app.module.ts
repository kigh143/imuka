import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { AddBusinessComponent } from './components/add-business/add-business.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { EinoviceComponent } from './components/einovice/einovice.component';
import { PitchbookComponent } from './components/pitchbook/pitchbook.component';
import { InvestmentRequestComponent } from './components/investment-request/investment-request.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { InvestmentoppComponent } from './components/investmentopp/investmentopp.component';
import { BusinessComponent } from './components/business/business.component';
import { EInvoiceComponent } from './components/e-invoice/e-invoice.component';

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
  { path: "add_business", component: AddBusinessComponent },
  { path: "business", component: BusinessComponent },
  { path: "pitchbook", component: PitchbookComponent }, 
  { path: "search", component: SearchComponent },
  { path: "investmentopp", component: InvestmentoppComponent},
  { path: "investmentrequest", component: InvestmentRequestComponent},
  { path: "einvoice", component: EInvoiceComponent},
  { path: "Product", component: ProductComponent},

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
    AddBusinessComponent,
    EinoviceComponent,
    PitchbookComponent,
    InvestmentRequestComponent,
    ProductComponent,
    SearchComponent,
    InvestmentoppComponent,
    BusinessComponent,
    EInvoiceComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(app_routes), AngularFontAwesomeModule, CarouselModule.forRoot(), TabsModule.forRoot(), AccordionModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
