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
   getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6ojfr3M6V32wRuMBj5uvnZurnNyNNLLw1fweD6ZIuTGkrSmd67qrSuG_9_QCUjOX49tOy5Q5R1Gyx8KOTxcL-vb3L5bSDXhZjMXa1Y3VK05USjwrxwTCjuzbC_0pEBk398KCrtJOleciB'
  });
    

  return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)
             .pipe(map(data =>  data['artists'].items));
      

   }

}
