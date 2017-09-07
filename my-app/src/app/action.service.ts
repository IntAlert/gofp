import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { HttpRequest, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable()
export class ActionService {

  public actions = [];


  // private
  private urls = {
    getActions: '/api/getActions'
  };

  constructor(private http: Http) {
    this.loadActions();
  }

  // this function should only be called after onActionsLoaded has fired
  public getActionById(action_id: number) {
    const actionFound = this.actions.find((action) => {
      return action.id === action_id;
    });

    if (actionFound) {
      return Promise.resolve(actionFound);
    }

    // we are waiting for actions to be initialised
    // just call the API for this action
    // should only happen if people access an action URL directly
    // TODO: share the /api/actions promise to save one API call
    return this.http.get('/api/getAction/' + action_id).toPromise()
      .then(response => {
        return response.json().action;
      })
      .catch(err => {
        throw(err);
      });
  }



  private loadActions() {

    this.http.get(this.urls.getActions).subscribe(response => {
      // Read the result field from the JSON response.
      this.actions = response.json().actions;
    }, err => {
      // TODO: handle
      console.error(err);
    });

  }

}
