import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';


//IMPORTS DE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component'
import {FlexLayoutModule} from '@angular/flex-layout';

//import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ToolbarComponent,NavbarComponent, HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    
    //SharedModule,
  ],
  exports:[ToolbarComponent,NavbarComponent, HomeComponent ]
})
export class CoreModule { 
  
  constructor(@Optional() @SkipSelf() core:CoreModule){
    if(core){
      throw new Error("Ya ha importado antes CoreModule");
    }
  }
}
