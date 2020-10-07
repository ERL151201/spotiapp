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
        'Authorization': 'Bearer BQDG6eP0qbE8xJduUzxk57yD22ppiuL3uJ37lfBbVuOi_F7tCFP_0wkZs7QkAxpvzyWCwbLEv-F62ZFY0ug_KQETVTKhNmWiIOtjqCojoedgoUAhRI1BwAy2i9X-Ayu7cbvlUJ3gCKFhruEs'
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


}
