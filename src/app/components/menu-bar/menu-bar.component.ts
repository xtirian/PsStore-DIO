import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

	searchBar:boolean;

	constructor(){

		this.searchBar = false;



	}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

}
