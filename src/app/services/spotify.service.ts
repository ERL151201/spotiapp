import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
    
   }
  
   getNewReleases(){

    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCd_kRaC4bhgry7ij_NYlJfkRGhZdq_9bWSKBzbkQizN0L3XJKN7fjZZ90QgzqP17lEmS8SmFSSsrRm6TNWfUkNwcKb7xtZXqeStqWFMTlaOebK34RwIzvhU2avQlJiHyna7w6uQAZXFk_Z'
    });
      
    this.http.get(	'https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
        .subscribe(data => {
          console.log(data);
          
        })
    

   }

}
