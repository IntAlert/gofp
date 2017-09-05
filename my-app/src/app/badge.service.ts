import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class BadgeService {

  public onCountLoaded = new EventEmitter();
  public countLoaded = false;
  public count: Number;

  // private
  private urls = {
    getBadgeCount: '/api/getBadgeCount'
  };

  constructor(private http: Http) {
    console.log('load actions');
    this.loadCount();
  }

  private loadCount() {

    this.http.get(this.urls.getBadgeCount).subscribe(response => {
      // Read the result field from the JSON response.
      // this.actions.push(data);// = data;
      this.count = response.json().count;
      this.countLoaded = true;
      this.onCountLoaded.emit();
    }, err => {
      // TODO: handle
      console.error(err);
    });

  }

}
