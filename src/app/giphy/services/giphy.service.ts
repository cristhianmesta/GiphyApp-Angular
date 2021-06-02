import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Giph, ResultGiphyInterface } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiUrl : string = "https://api.giphy.com/v1/gifs";
  private apiKey : string = "8WC1k0nyo0g8ws4zVvnSDoDO5WGVCBAw";
  private _recents : string[] = [];

  public results : Giph[] = [];

  get recents(){
    return [...this._recents];
  }

  constructor(private http: HttpClient) { 
    this._recents = JSON.parse(localStorage.getItem("history")!) || [];
    this.results = JSON.parse(localStorage.getItem("results")!) || [];
  }

  searchGif(searchParameter : string){
    if(searchParameter.length===0) return;

    searchParameter = searchParameter.trim().toLowerCase();
    if(!this.recents.includes(searchParameter)){
      this._recents.unshift(searchParameter);
    }
    this._recents = this._recents.splice(0,10);
    localStorage.setItem("history", JSON.stringify(this._recents));
    this.listGifs(searchParameter);
  }

  private listGifs(searchParameter: string){

    const params = new HttpParams()
                              .set("api_key",this.apiKey)
                              .set("limit","50")
                              .set("q",searchParameter);
                              

    this.http.get<ResultGiphyInterface>(`${this.apiUrl}/search`, { params })
      .subscribe( (response) => {
        this.results = response.data;
        localStorage.setItem("results", JSON.stringify(this.results ));
      });
  }

}
