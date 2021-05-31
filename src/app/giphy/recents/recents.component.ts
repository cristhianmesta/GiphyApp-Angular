import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html'
})
export class RecentsComponent{

  get recents(){
    return this.giphyServie.recents;
  }

  constructor(private giphyServie : GiphyService) { 
    
  }

}
