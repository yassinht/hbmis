import { TeamComponent } from './views/team/team.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { HeaderComponent } from './views/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { FooterComponent } from './views/footer/footer.component';
import { ServicesComponent } from './views/services/services.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './views/faq/faq.component';
import { LandingComponent } from './views/landing/landing.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductsComponent } from './views/products/products.component';
import { ClientsComponent } from './views/clients/clients.component';
// Create a function for loading translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent,
    HeaderComponent,
    ProductsComponent,
    FaqComponent,
    LandingComponent,
    VideoCarouselComponent,
    TeamComponent,ClientsComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),BrowserAnimationsModule,MatSnackBarModule,FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    [ScrollToModule.forRoot()],
    AppRoutingModule,HttpClientModule,TranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
