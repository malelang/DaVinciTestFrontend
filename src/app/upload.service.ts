import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  urlAPI="http://localhost:3000/api/subir";
  constructor(private http:HttpClient) { 

  }

  uploadFile(formData){
    return this.http.post(this.urlAPI, formData);
  }
}
