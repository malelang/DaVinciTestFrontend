import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import { InfoComponent } from './features/info/info.component';
import { CrearComponent } from './features/crear/crear.component';
import { PerfilComponent } from './features/perfil/perfil.component';
import { FlexLayoutModule } from '@angular/flex-layout';
//import {MatCarouselModule} from '@ngmodule/material-carousel'
//import { MatFileUploadModule } from 'angular-material-fileupload';
import { SharedModule } from './shared/shared.module';
import {UploadService} from '../app/upload.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    CrearComponent,
    PerfilComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    //MatCarouselModule.forRoot(),
    //MatFileUploadModule,
    SharedModule.forRoot(),
    HttpClientModule,
  ],
  providers: [ UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
