import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'safe_spotify_uri'
})
export class SafeSpotifyUriPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ){ }


  transform( value: string): any {
    const spotify = 'https://open.spotify.com/embed/?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( spotify + value );
  }

}
