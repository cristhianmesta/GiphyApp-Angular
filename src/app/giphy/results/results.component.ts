import { Component } from '@angular/core';

import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  get results(){
    return this.giphyService.results;
  }

  constructor(private giphyService : GiphyService) { 

  }


}
