import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import { HttpRequest, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable()
export class ActionService {
  
  public onActionsLoaded = new EventEmitter();
  

  public actionsLoaded = false;
  public actions = []


  // private
  private urls = {
    getActions: '/api/getActions'
  };

  constructor(private http: Http) {
    console.log('load actions')
    this.loadActions()
  }

  // this function should only be called after onActionsLoaded has fired
  public getAction(action_id: number) {
    let actionFound = this.actions.find((action) => {
      return action.id == action_id
    })

    if (actionFound) {
      return Promise.resolve(actionFound)
    } else {
      return Promise.reject("Action not found")
    }
  }


  private loadActions() {

    this.http.get(this.urls.getActions).subscribe(response => {
      // Read the result field from the JSON response.
      // this.actions.push(data);// = data;
      this.actions = response.json().actions;
      console.log(this.actions)
      this.actionsLoaded = true
      this.onActionsLoaded.emit();
      
    }, err => {
      // TODO: handle
      console.error(err);
    });

  }

}
