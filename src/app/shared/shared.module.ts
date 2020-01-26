import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [],
  entryComponents:[],
  imports: [
    CommonModule,
    MatButtonModule,

  ],
  exports:[
    MatButtonModule,
    
  ]
})
export class SharedModule { 

  static forRoot(){
    return {
      ngModule: SharedModule,
      providers:[]
    }
  }
}
