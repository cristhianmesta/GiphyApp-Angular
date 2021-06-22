import { Component } from '@angular/core';

import { GiphyService } from '../services/giphy.service';
import { Giph } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  `
  `
  ]
})

export class ResultsComponent {

  get results() : Giph[] {
    return this.giphyService.results;
  }

  constructor(private giphyService : GiphyService) { 

  }

}