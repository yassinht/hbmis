import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './views/footer/footer.component';
import { TeamComponent } from './views/team/team.component';
import { AboutComponent } from './views/about/about.component';
import { ProductsComponent } from './views/products/products.component';
import { ServicesComponent } from './views/services/services.component';
import { ClientsComponent } from './views/clients/clients.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './views/faq/faq.component';
import { HeaderComponent } from './views/header/header.component';
import { LandingComponent } from './views/landing/landing.component';

// Create a function for loading translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    FooterComponent,
    TeamComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ClientsComponent,
    VideoCarouselComponent,
    FaqComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatSnackBarModule,FormsModule,
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
