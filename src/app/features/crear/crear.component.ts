import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { SlideItem, SlideService } from '../slide.service';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {UploadService} from '../../upload.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})


export class CrearComponent implements OnInit {

  uploadedFiles:Array<File>;
  slide:SlideItem[]=[];
  autoplay:"";
  constructor(service:SlideService, private uploadService:UploadService) { 
    this.slide=service.getItemSlide();
  }

  ngOnInit() {
  }

  onUpload(){
    console.log("load")
    let formData=new FormData();
    for (let i=0; i<this.uploadedFiles.length;i++){
      formData.append("uploads[]",this.uploadedFiles[i],this.uploadedFiles[i].name);
    }
    this.uploadService.uploadFile(formData).subscribe((res)=>{
      console.log('Response: ',res)
    },(err)=>{
      console.log('Error: ',err)
    })
  }

  onFileChange(e){
    this.uploadedFiles=e.target.files;
    console.log("change",e)
  }
}
