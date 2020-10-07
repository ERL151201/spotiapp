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
        'Authorization': 'Bearer BQDREYYXGJ9T3P_T8tSHMnM3YPG4qy42ujSR4X7P_JEfYrSlDbSC53i6tpbJGA0Ttq1LPqh62FTo34hwyW0t_ewW2SV5z_kja6RsrpwiNB9wETriD1DXX77J2cLhpHmIBsZfM1PVWq1_N2-9'
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
