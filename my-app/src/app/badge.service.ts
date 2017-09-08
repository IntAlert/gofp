import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class BadgeService {

  public count: Number;
  public promotedBadges = [];
  public recentBadges = [];

  // private
  private urls = {
    getBadgeCount: '/api/getBadgeCount',
    getPromotedBadges: '/api/getPromotedBadges',
    getRecentBadges: '/api/getRecentBadges',
  };

  constructor(private http: Http) {
    this.loadCount();
    this.loadPromotedBadges();
  }

  private loadCount() {

    this.http.get(this.urls.getBadgeCount).subscribe(response => {
      // Read the result field from the JSON response.
      this.count = response.json().count;
    }, err => {
      // TODO: handle
      console.error(err);
    });

  }

  public getBadgeById(badge_id: number) {

    return this.http.get('/api/getBadge/' + badge_id).toPromise()
      .then(response => {
        return response.json().badge;
      })
      .catch(err => {
        throw(err);
      });
  }

  private loadPromotedBadges() {

    this.http.get(this.urls.getPromotedBadges).subscribe(response => {
      // Read the result field from the JSON response.
      this.promotedBadges = response.json().badges;
    }, err => {
      // TODO: handle
      console.error(err);
    });

  }

  public loadRecentBadges() {

    // only do this once
    if (this.loadRecentBadges.length) {
      return;
    }

    this.http.get(this.urls.getRecentBadges).subscribe(response => {
      // Read the result field from the JSON response.
      // this.actions.push(data);// = data;
      this.recentBadges = response.json().badges;
      console.log(this.recentBadges);
    }, err => {
      // TODO: handle
      console.error(err);
    });

  }

}
