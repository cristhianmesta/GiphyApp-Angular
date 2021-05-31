import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  constructor(private giphyService :GiphyService) {

   }

  @ViewChild("textSearch") textSearch! : ElementRef<HTMLInputElement>;

  search(){
    this.giphyService.searchGif(this.textSearch.nativeElement.value);
    this.textSearch.nativeElement.value = "";
    console.log(this.giphyService.recents);
  }
}
