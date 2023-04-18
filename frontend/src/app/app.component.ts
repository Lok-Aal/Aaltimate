import { Component } from '@angular/core';
import { TelephoneNumber } from 'src/types/TelephoneNumber';
import { TelephoneService } from './services/telephone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  parsedNumbers: TelephoneNumber[] = [
    {
      landesvorwahl: '49',
      ortsvorwahl: '7151',
      hauptwahl: '2058990',
    }
  ];
  inputNumber = '';

  constructor(private telephoneService: TelephoneService) {

  }

  parseNumber() {
    console.log(this.inputNumber);
    this.telephoneService.parseNumber(this.inputNumber).subscribe((parsedNumber: TelephoneNumber) => {
      this.parsedNumbers.push(parsedNumber);
    });
  }
}
