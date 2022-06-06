import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';
import { BarcodeFormat, DecodeHintType, Exception, Result } from '@zxing/library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
