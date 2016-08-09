import {Component, Output, EventEmitter, OnInit} from '@angular/core';
@Component({
    selector:'search-bar',
    templateUrl:'app/templates/searchbar.template.html'
})
export class SearchBar implements OnInit{
   @Output() update = new EventEmitter();
    ngOnInit(){
        this.update.emit('');
    }
}
