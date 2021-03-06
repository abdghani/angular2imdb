import {Component,Output,EventEmitter} from '@angular/core'

@Component({
	selector:'inputbox',
	templateUrl:'app/partials/searchbar.html'
})

export class SearchbarComponent{
	@Output()notify: EventEmitter<string> = new EventEmitter<string>();

	inputValue:string = "shawshank redemption"
	onSubmit = function(){
		this.notify.emit(this.inputValue)
	}
}