import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiURL = 'http://127.0.0.1:8000/print-data/'
  anotherURL = 'http://127.0.0.1:8000/fields/'
  constructor(private http: HttpClient) { }
  sendData(data: any): Observable<any> {
      return this.http.post(this.apiURL,data)
  }

  getList(): Observable<any> {  
    return this.http.get(this.apiURL)
  }
data: any;
get(id: number): Observable<any> {
  console.log('This is Id: service:', id);
  this.data = this.http.get<any>(`${this.anotherURL}${id}/`);
  console.log('nothing',this.data);
  return this.data;
}

  update(id:number,data: any): Observable<any> {
    console.log('This is Update Funtion',data);  
    return this.http.put(`http://127.0.0.1:8000/print-data/${id}/`,data)
  }


}
