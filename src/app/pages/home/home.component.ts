import { Component } from '@angular/core';
import Data from 'src/app/mock/data'
import {cardData} from 'src/app/models/objData'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	mock:cardData;



	constructor(	){
		this.mock = Data
	}

}
