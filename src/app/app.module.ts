import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// importar rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { SafeSpotifyUriPipe } from './pipes/safe_spotify_uri.pipe';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    SafeSpotifyUriPipe,
    CardsComponent,
    LoadingComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
