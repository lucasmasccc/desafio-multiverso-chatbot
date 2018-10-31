import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChatService  {

  private url = '/api/message';
  private enviroment = 'http://localhost:3000'

  constructor(private http: HttpClient, ) {
  };

  submitMessage(msg: string, ctx: any): Observable<any> {
    var payload = {
      context: ctx || {},
      input: { "text": msg } || {}
    };
    return this.http.post(this.enviroment+this.url, payload, httpOptions);
  }
}




