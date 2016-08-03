import {Component,Input} from '@angular/core'

@Component({
	selector:'movie-details',
	templateUrl:'app/partials/movie-detail.html'
})

export class MovieDetailComponent{
	@Input()
    movie_detail : Object
}