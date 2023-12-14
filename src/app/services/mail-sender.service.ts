import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MailSenderService {
URL = environment.urlBackend
  constructor(private htpp:HttpClient) {

   
   }
   sendMail(mail){
    return this.htpp.post<any>(`${this.URL}send-mail`,mail);
  }
}
