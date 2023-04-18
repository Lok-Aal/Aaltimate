import { Component } from '@angular/core';
import { TelephoneNumber } from 'src/types/TelephoneNumber';
import { TelephoneService } from './services/telephone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  parsedNumber?: TelephoneNumber
  inputNumber = '';

  constructor(private telephoneService: TelephoneService) {

  }
}
