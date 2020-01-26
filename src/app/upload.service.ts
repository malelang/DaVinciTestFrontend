import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  urlSEP="http://localhost:3000/api/sep"
  urlAPI="http://localhost:3000/api/subir";
  constructor(private http:HttpClient) { 

  }

  uploadFile(formData){
    return this.http.post(this.urlAPI, formData);
  }

  uploadSeparator(sep):Observable<SimpleResponse>{
    const body={separador:sep}
    return this.http.post<SimpleResponse>(this.urlSEP,body);
  }
}

export class SimpleResponse {
  success: boolean;
  err: string;
}
