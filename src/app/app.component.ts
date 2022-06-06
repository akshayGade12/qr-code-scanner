import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QR-scanner';
  scanResult:any='';
  onCodeResult(result:string){
    console.log(result)
    this.scanResult=result
  }
}
