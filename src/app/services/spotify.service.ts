import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');    
   }

   getQuery( query: string){
       const url = `https://api.spotify.com/v1/${ query }`;

       const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCl3MT84fjhqRT04dg7oH3Wmh9UyW8Swh97cXatGnTom8KQKD3ZEs1T5FPeuetf4kFa-R99gIm5QJM-Lism2x111kYQUxOd6wN3oqD8ocTfhdZZN6RO7Nd_aZo_Fe_ZK0-hvWEOxzi1tgMa'
    });

    return this.http.get(url, {headers});
   }
  
   getNewReleases(){

      return this.getQuery('browse/new-releases?limit=20')  
          .pipe( map(data => data['albums'].items));

   }
   getArtistas(termino: string){
  return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
             .pipe(map(data =>  data['artists'].items));
      

   }

   getArtista(id: string){
    return this.getQuery(`artists/${ id }`);
               //.pipe(map(data =>  data['artists'].items));
        
  
     }

     getTopTracks(id: string){
      return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                 .pipe(map(data =>  data['tracks']));
          
    
       }  

}
