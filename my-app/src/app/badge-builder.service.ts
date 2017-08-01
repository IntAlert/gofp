import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { HttpRequest, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

// import 'rxjs/add/operator/toPromise';

@Injectable()
export class BadgeBuilderService {

  // public
  public opengraph: String;
  public image: String;


  // private
  private urls = {
    upload: '/api/uploadProfilePic',
    enter: '/api/enterPrizeDraw'
  };

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private httpClient: HttpClient) { }




  // emitters
  // public currentStage = new EventEmitter();
  public onFileChosen = new EventEmitter();
  public onUploadStart = new EventEmitter();
  public onUploadProgress = new EventEmitter();
  public onUploadComplete = new EventEmitter();
  public onBadgeDownloadStart = new EventEmitter();
  public onBadgeDownloadProgress = new EventEmitter();
  public onBadgeDownloadComplete = new EventEmitter();
  public onPreviewReady = new EventEmitter();
  public onShare = new EventEmitter();
  public onPrizeEntry = new EventEmitter();

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

  public registerPreviewReady = () => {
    this.onPreviewReady.emit();
  }

  public registerShare = () => {
    this.onShare.emit();
  }

  public registerPrizeEntry = () => {
    this.onPrizeEntry.emit();
  }

  // Public methods
  public uploadProfilePic = (img) => {
    const formData: FormData = new FormData();
    formData.append('image', img, img.name);

    const req = new HttpRequest('POST', this.urls.upload, formData, {
      reportProgress: true,
    });

    this.registerUploadStart();
    this.registerUploadProgress(0);
    return this.httpClient
      .request(req)
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
          this.registerUploadComplete();
        }
      });

  }

  enterPrizeDraw(email: string, festival_news: string) {

    return this.http
      .post(this.urls.enter, JSON.stringify({email, festival_news}), {headers: this.headers})
      .subscribe(data => {
        // TODO: redirect ot further actions
        console.log(data);
      },
      err => {
        console.error(err);
      });

  }

  preloadBadgeImage(imageUrl: string) {
    const req = new HttpRequest('GET', imageUrl, null, {
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
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
          this.registerBadgeDownloadComplete();
        }
      });
  }

}
