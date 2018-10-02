import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadSourceFileComponent } from './upload-source-file/upload-source-file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './upload-file.service';
import { DownloadResponseComponent } from './download-response/download-response.component';
import {Observable} from 'rxjs/Observable';

@NgModule({
  declarations: [
    AppComponent,
    UploadSourceFileComponent,
    DownloadResponseComponent
  ],
  imports: [
    BrowserModule,
    Observable,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
