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
        'Authorization': 'Bearer BQATCnypjcRfJ77Q-76ZtHPGadU-LOruCCDFUc6jxBI3dKTlvumKF-V13Y6suKMlNqbEz6upnS5YC-BihzoYxK9ETItwZUaNZLcvqP52cMDoqikBn3iB2Uv0kAyPe1UtaSGS7c1ZjMvLxGB0'
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
