import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { RecentsComponent } from './recents/recents.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: 
  [
    MainComponent,
    ResultsComponent,
    RecentsComponent,
    SearchComponent
  ],
  exports: 
  [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiphyModule { 

  
}
 