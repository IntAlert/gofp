import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpRequest, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
// import { SocialBadge } from './social-badge';

// don't know why
 class SocialBadge {
  ok: boolean;
  image: string;
  opengraph: string;
}

@Injectable()
export class BadgeBuilderService {

  // public

  // badge details, keyed by action_id
  public store: Object;


  // private
  private currentAction: any;
  private selectedActionId: any;
  private urls = {
    upload: '/api/uploadProfilePic',
    generate: '/api/generateBadge',
    enter: '/api/enterPrizeDraw'
  };

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private httpClient: HttpClient) {

    // bootstrap local store
    const sessionStoreJSON = localStorage.getItem('badge-builder-store');
    this.store =  sessionStoreJSON ? JSON.parse(sessionStoreJSON) : {};

    console.log(this.store);

   }


  // emitters
  // public onStart = new EventEmitter();
  public onFileChosen = new EventEmitter();
  public onUploadStart = new EventEmitter();
  public onUploadProgress = new EventEmitter();
  public onUploadComplete = new EventEmitter();
  // public onStorySubmit = new EventEmitter();
  public onBadgeDownloadStart = new EventEmitter();
  public onBadgeDownloadProgress = new EventEmitter();
  public onBadgeDownloadComplete = new EventEmitter();
  public onShare = new EventEmitter();
  public onPrizeEntryStart = new EventEmitter();
  public onPrizeEntryComplete = new EventEmitter();


  // public registerStart = () => {
  //   this.onStart.emit();
  // }

  public registerFileChosen = () => {
    this.onFileChosen.emit();
  }

  // Image Upload
  public registerUploadStart = () => {
    this.onUploadStart.emit();
  }

  public registerUploadProgress = (percentage: number) => {
    this.onUploadProgress.emit(percentage);
  }

  public registerUploadComplete = () => {
    this.onUploadComplete.emit();
  }

  // Story Input
  // public registerStorySubmitted = () => {
  //   this.onStorySubmit.emit();
  // }

  // Badge Download
  public registerBadgeDownloadStart = () => {
    this.onBadgeDownloadStart.emit();
  }

  public registerBadgeDownloadProgress = (percentage: number) => {
    this.onBadgeDownloadProgress.emit(percentage);
  }

  public registerBadgeDownloadComplete = () => {
    this.onBadgeDownloadComplete.emit();
  }

  public registerShare = () => {
    this.onShare.emit();
  }

  public registerPrizeEntryStart = () => {
    this.onPrizeEntryStart.emit();
  }

  public registerPrizeEntryComplete = () => {
    this.onPrizeEntryComplete.emit();
  }

  // Public methods
  // public setActionId = (action_id) => {
  //   this.selectedActionId = action_id;
  // }

  public setCurrentAction = (action) => {
    this.currentAction = action;

    // store badge building details to be shared
    // across routes
    if (!this.store[this.currentAction.id]) {
      this.store[this.currentAction.id] = {
        upload: false,
        story: '',
        badge: {
          opengraph: '',
          image: ''
        }
      };
    }
  }

  public setUpload = (upload) => {
    this.store[this.currentAction.id].upload = upload;
    this.saveSession();
  }

  public setStory = (story) => {
    this.store[this.currentAction.id].story = story;
    this.saveSession();
  }

  public setBadge = (badge) => {
    this.store[this.currentAction.id].badge = badge;
    this.saveSession();
  }

  public saveSession = () => {
    localStorage.setItem('badge-builder-store', JSON.stringify(this.store));
  }

  public getCurrentActionUserData = () => {
    const store = this.store[this.currentAction.id];
    console.log(store);
    return store;
  }




  public uploadProfilePic = (img) => {
    const formData: FormData = new FormData();
    formData.append('image', img, img.name);
    formData.append('action_id', this.selectedActionId);

    const req = new HttpRequest('POST', this.urls.upload, formData, {
      reportProgress: true,
    });

    this.registerUploadStart();
    this.registerUploadProgress(0);
    return this.httpClient
      .request<any>(req)
      .subscribe(event => {

        // Via this API, you get access to the raw event stream.
        // Look for upload progress events.
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.registerUploadProgress(percentDone);
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');

          // save profile pic details for current action
          this.setUpload(event.body.upload);
          this.registerUploadComplete();

          // start downloading badge
          // this.preloadBadgeImage();

        }
      }, err => {
        // TODO: handle
        console.error(err);
      });

  }

  // Generate Badge
  generateBadge() {

    const actionUserData = this.getCurrentActionUserData();

    console.log(actionUserData);

    const payload = {
      story: actionUserData.story,
    };

    if (actionUserData.upload) {
      payload['upload_id'] = actionUserData.upload.id;
    }

    return this.http
      .post(this.urls.generate, JSON.stringify(payload), { headers: this.headers }).toPromise()
      .then((response) => {
        this.setBadge(response.json());
        this.preloadBadgeImage();
      })
      ;
  }

  // Preload Badge Image
  preloadBadgeImage() {

    const actionUserData = this.getCurrentActionUserData();

    const req = new HttpRequest('GET', actionUserData.badge.image, null, {
      reportProgress: true,
    });

    this.registerBadgeDownloadStart();
    this.registerBadgeDownloadProgress(0);
    return this.httpClient
      .request(req)
      .subscribe(event => {
        // Via this API, you get access to the raw event stream.
        // Look for upload progress events.
        if (event.type === HttpEventType.DownloadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.registerBadgeDownloadProgress(percentDone);
          console.log(percentDone);
          console.log(`File is ${percentDone}% downloaded.`);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely downloaded!');
          this.registerBadgeDownloadComplete();
        }
      }, err => {
        console.error(err);
      });
  }


  enterPrizeDraw(email: string, name: string, festival_news: string) {

    this.registerPrizeEntryStart();

    return this.http
      .post(this.urls.enter, JSON.stringify({
        action_id: this.currentAction.id,
        badge_id: this.getCurrentActionUserData().badge.id,
        name,
        email,
        festival_news,
      }), { headers: this.headers }).toPromise()
      .then(response => {
        this.registerPrizeEntryComplete();
      });

  }

}
