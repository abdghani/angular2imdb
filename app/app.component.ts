import {Component,OnInit} from '@angular/core'
import {NavbarComponent} from './navbar.component'
import {SearchbarComponent} from './searchbar.component'
import {MovieDetailComponent} from './movieDetail.component'
import {MovieDetailService} from './movieDetail.service'

@Component({
    selector:'my-app',
    template:`<div class="container">
	                <mynavbar></mynavbar>
	                <inputbox (notify)='onNotify($event)'></inputbox> 
	                <movie-details [movie_detail]="search_query"></movie-details>          
              </div>
             `,
    directives:[NavbarComponent,SearchbarComponent,MovieDetailComponent],
    providers:[MovieDetailService]
})

export class AppComponent{

	search_query: Object
	result
	constructor(private _movie_detail_service : MovieDetailService){}

	onNotify(message:string):void {
	    this._movie_detail_service.getAllDetials(message).then(data => this.search_query = data);
	};

	ngOnInit():any{
		this._movie_detail_service.getAllDetials("shawshank redemption").then(data => this.search_query = data);
	}
}
