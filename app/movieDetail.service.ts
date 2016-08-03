import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class MovieDetailService{
	url:string
	constructor(private _http:Http){}

	getAllDetials(name){
		name = name.split(' ').join('+');
		this.url = "http://www.omdbapi.com/?t="+name+"&y=&plot=full&r=json"
		return this._http.get(this.url)
				   .toPromise()
	               .then(data => data.json())          
	}

}