import { Component, OnInit } from '@angular/core';

import { SlideItem, SlideService } from '../slide.service';
import {UploadService} from '../../upload.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})


export class CrearComponent implements OnInit {

  uploadedFiles:Array<File>;
  slide:SlideItem[]=[];
  alerta=false;
  
  archivoForm:FormGroup=this.fb.group(
    {
      separador:["",Validators.required],
    }
  );

  constructor(service:SlideService, private uploadService:UploadService, private fb:FormBuilder) { 
    this.slide=service.getItemSlide();
  }

  ngOnInit() {
  }

  onUpload(){
    const separador=this.archivoForm.value;
    let separator= separador.separador;
    let formData=new FormData();
    for (let i=0; i<this.uploadedFiles.length;i++){
      formData.append("uploads[]",this.uploadedFiles[i],this.uploadedFiles[i].name);
    }
    this.uploadService.uploadFile(formData).subscribe((res)=>{
      console.log('Response: ',res)
    },(err)=>{
      console.log('Error: ',err)
    })
    this.uploadService.uploadSeparator(separator).subscribe((res)=>{
      console.log('Response: ',res)
    }),(err)=>{
      console.log("Error: ", err)
    }
  }

  onFileChange(e){
    this.uploadedFiles=e.target.files;
    console.log("change",e)
  }
}
