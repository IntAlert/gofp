import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { HttpRequest, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable()
export class ActionService {

  public actions = [{"id":1,"image":"/assets/actions/1.png","title":"Share your place of peace","link":null,"link_text":null,"description":"We've seen how important it is to find a place that helps you feel calm, especially after a conflict.\nShow us where you go to feel at peace.Is it in a park or simply surrounded by your family?","description_2":"Share a dish with us that you feel can bring people together or take a picture of you connecting across the dining table.","title_for_badge":"My place of peace","priority":1,"promoted":true,"promoted_priority":1,"createdAt":"2012-12-12T12:12:12.000Z","updatedAt":"2012-12-12T12:12:12.000Z"},{"id":2,"image":"/assets/actions/2.png","title":"Talk to someone with a different viewpoint","link":null,"link_text":null,"description":"Only hearing similar viewpoints can lead to widening divisions in communities. Why not try speaking to someone you wouldn't usually talk to?","description_2":"Take a photo together or share a few words. Actions like this can help bring us together.","title_for_badge":"How I reached out","priority":2,"promoted":true,"promoted_priority":2,"createdAt":"2012-12-12T12:12:12.000Z","updatedAt":"2012-12-12T12:12:12.000Z"},{"id":3,"image":"/assets/actions/3.png","title":"Share a dish of peace","link":null,"link_text":null,"description":"We believe food can break down barriers and get people talking. As the Arab saying goes, 'Once you eat with someone you can’t betray them'.","description_2":"Share with us a recipe that you feel connects people or a great picture of you connecting across the dining table.","title_for_badge":"My recipe of peace","priority":3,"promoted":true,"promoted_priority":3,"createdAt":"2012-12-12T12:12:12.000Z","updatedAt":"2012-12-12T12:12:12.000Z"},{"id":4,"image":"/assets/actions/4.png","title":"Give to charity","link":"http://www.international-alert.org/donate","link_text":"www.international-alert.org/donate","description":"Giving to charity can make us feel good as well as help others.  Whether you give your time or money, share your story.","description_2":"Tell us how you give to charity. If you would like to donate to International Alert, visit ","title_for_badge":"Giving to charity","priority":4,"promoted":true,"promoted_priority":4,"createdAt":"2012-12-12T12:12:12.000Z","updatedAt":"2012-12-12T12:12:12.000Z"},{"id":5,"image":"/assets/actions/5.png","title":"Choose your own everyday peace action","link":null,"link_text":null,"description":"Choose your own everyday peace action’ action: Change the description to ‘We can all contribute to peace in different ways - both big and small.","description_2":"Tell us how you are contributing to peace and help inspire others with your own creative and fun ideas.","title_for_badge":"My everyday peace","priority":5,"promoted":true,"promoted_priority":5,"createdAt":"2012-12-12T12:12:12.000Z","updatedAt":"2012-12-12T12:12:12.000Z"}];
  public promotedActions = [];


  // private
  private urls = {
    getActions: '/api/getActions'
  };

  constructor(private http: Http) {
    // cached for now
    // this.loadActions();
  }

  // this function should only be called after onActionsLoaded has fired
  public getActionById(action_id) {
    const actionFound = this.actions.find((action) => {
      return action.id === parseInt(action_id);
    });

    if (actionFound) {
      return Promise.resolve(actionFound);
    } else {
      console.log('actionFound=false for ' + action_id)
      console.log(this.actions)
      console.log(actionFound)
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
      this.updatePromotedActions();
    }, err => {
      // TODO: handle
      console.error(err);
    });

  }

  private updatePromotedActions() {

    // sift
    const promotedActionsUnordered = this.actions.filter(action => {
      return action.promoted;
    });

    // reorder
    this.promotedActions = promotedActionsUnordered.sort((a1, a2) => {
      if (a1.promoted_priority > a2.promoted_priority) {
        return 1;
      } else if (a1.promoted_priority < a2.promoted_priority) {
        return -1;
      } else {
        return 0;
      }
    });

  }
}
