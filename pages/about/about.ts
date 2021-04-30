import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css']
})
export class AboutPage {
  sex: string;
  heightfeet: number;
  heightinch: number;
  mrobinson: number;
  mmiller: number;
  mhamwi: number;
  mdevine: number;
  frobinson: number;
  fmiller: number;
  fhamwi: number;
  fdevine: number;
  result1: number;
  result2: number;
  result3: number;
  result4: number;
  

  constructor(public navCtrl: NavController) {

  }

    calculateIW () {

      this.mrobinson = Math.round (52 + (1.9 * this.heightinch) + ((this.heightfeet - 5) * 12));
      this.mmiller = Math.round (56.2 + (1.41 * this.heightinch) + ((this.heightfeet - 5) * 12));
      this.mhamwi = Math.round (48 + (2.7 * this.heightinch) + ((this.heightfeet - 5) * 12));
      this.mdevine = Math.round (50 + (2.3 * this.heightinch) + ((this.heightfeet - 5) * 12));
      this.frobinson = Math.round (49 + (1.7 * this.heightinch) + ((this.heightfeet - 5) * 12));
      this.fmiller = Math.round (53.1 + (1.36 * this.heightinch) + ((this.heightfeet - 5) * 12));
      this.fhamwi = Math.round (45.5 + (2.2 * this.heightinch) + ((this.heightfeet - 5) * 12));
      this.fdevine = Math.round (45.5 + (2.3 * this.heightinch) + ((this.heightfeet - 5) * 12));

      if (this.sex == "Male"){
      this.result1 = this.mrobinson;
      this.result2 = this.mmiller;
      this.result3 = this.mhamwi;
      this.result4 = this.mdevine;

    } else if (this.sex == "Female") {
      this.result1 = this.frobinson;
      this.result2 = this.fmiller;
      this.result3 = this.fhamwi;
      this.result4 = this.fdevine;
    }

    }

}
