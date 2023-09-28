import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent {

	@Input() public platform:string
	@Input() public price:string

	constructor(){
		this.platform = '';
		this.price ='';
	}

}
