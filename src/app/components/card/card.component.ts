import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

	@Input() gameLabel:string
	@Input() gamePlatform:string;
	@Input() gamePrice:string;
	@Input() imgSrc:string;


	constructor(){
		this.gameLabel = ''
		this.gamePlatform = ''
		this.gamePrice = ''
		this.imgSrc = ''


	}

}
