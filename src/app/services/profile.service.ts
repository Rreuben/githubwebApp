import { Injectable } from '@angular/core' ;
import { Http, Headers } from '@angular/http' ;
import { map } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private username : string;
  private clientid = '5fe5ac64991e05eaf004';
  private clientsecret = '9f720c9da010c9a574665e36a458a48e5c51b0c2';

  constructor( private http : Http ) { 
    console.log( 'Service is now ready!' );
    this.username = 'baedert';
  }

  getProfileInfo() {
    return this.http.get( 'https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .pipe( map( res => res.json() ) );
  }

}