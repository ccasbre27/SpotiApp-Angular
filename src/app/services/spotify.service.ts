import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer yourToken'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
        return data.albums.items;
      }));
  }

  getArtist(artistName: string) {
    
    return this.getQuery(`search?q=${ artistName }&type=artist&limit=15`)
      .pipe( map( (data: any) => {
        return data.artists.items;
      }));
  }

}
