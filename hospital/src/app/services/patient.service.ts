import { Injectable } from '@angular/core';
// import { Profile } from 'selenium-webdriver/firefox';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
url = 'http://localhost:8080';
  getProfile(){
    return this.http.post(`${this.url}/patient/login`, {'uid':this.cookieService.get('patient_uid') });
  }

  getData(){
    return this.http.post(`${this.url}/patient/data`, {'uid':this.cookieService.get('patient_uid') });
  }

}
