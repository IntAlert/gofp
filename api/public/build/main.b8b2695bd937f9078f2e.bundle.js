webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},"5/Am":function(e,t){e.exports='<div *ngIf=" mode == \'initial\' ">\n\n  \x3c!-- Empty when initial --\x3e\n\n</div>\n\n<div class="social-actions" *ngIf=" mode == \'ready\' ">\n\n  <div class="twitter">\n    <button ceiboShare [twitter]="{url:badge.opengraph, text:tweetText}" md-button class="md-raised" (click)="startTwitterShare()">\n       <i class="fa fa-twitter-square fa-2x" aria-hidden="true"> </i> \n      Share to Twitter\n    </button>\n  </div>\n\n  <div class="facebook">\n    <button ceiboShare [facebook]="{u: badge.opengraph}" md-button class="md-raised" (click)="startFacebookShare()">\n      <i class="fa fa-facebook-square fa-2x" aria-hidden="true"> </i> \n      Share to Facebook\n    </button>\n  </div>\n\n</div>\n'},"6Dmy":function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".submit{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:1em}.submit>div{-webkit-box-flex:1;-ms-flex:1;flex:1}.full-width{width:100%}",""]),e.exports=e.exports.toString()},CvJU:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".full-width{width:100%}.file-chooser{margin:1em;text-align:center}",""]),e.exports=e.exports.toString()},"F/ih":function(e,t,n){"use strict";var o=n("/oeL"),r=n("u558");n.d(t,"a",function(){return s});var i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){var t=this;this.mode="initial",this.tweetText="Some Tweet Text",this.startFacebookShare=function(){t.service.registerShare()},this.startTwitterShare=function(){t.service.registerShare()},e.onUploadStart.subscribe(function(){t.mode="initial"}),e.onBadgeDownloadComplete.subscribe(function(e){t.mode="ready",t.badge=e}),this.service=e}return e}();s=i([n.i(o.Component)({selector:"app-social-actions",template:n("5/Am"),styles:[n("FDHF")]}),a("design:paramtypes",["function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],s);var c},FDHF:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".social-actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.social-actions>div{-webkit-box-flex:1;-ms-flex:1;flex:1}.social-actions>div>button{width:100%}",""]),e.exports=e.exports.toString()},Hhbu:function(e,t){e.exports='\n<div class="email-collector" *ngIf="ready">\n  <form [formGroup]="complexForm" class="email-collector-form" (ngSubmit)="submitForm(complexForm.value)">\n    <md-input-container class="full-width">\n\n      \x3c!-- <input mdInput placeholder="Email" [(ngModel)]="model.email" name="email"> --\x3e\n      <input type="email" mdInput value="" placeholder="Enter your email address" name="email" [formControl]="complexForm.controls[\'email\']">\n\n      <md-error *ngIf="complexForm.controls[\'email\'].hasError(\'pattern\')">\n        Please enter a valid email address\n      </md-error>\n\n      <md-error *ngIf="complexForm.controls[\'email\'].hasError(\'required\')">\n        Email is <strong>required</strong>\n      </md-error>\n\n    </md-input-container>\n\n    <div class="submit">\n\n      <div>\n        <md-checkbox value="" name="festival_news" [formControl]="complexForm.controls[\'festival_news\']">\n          Sign up for festival news?\n        </md-checkbox>\n      </div>\n\n      <div>\n        <button class="full-width" type="submit" [disabled]="!complexForm.valid" md-raised-button>Enter Prize Draw</button>\n      </div>\n    </div>\n\n  </form>\n</div>'},J1D7:function(e,t,n){"use strict";var o=n("/oeL"),r=n("u558");n.d(t,"a",function(){return s});var i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){var t=this;this.mode="initial",this.badgeDownloadProgressPercentage=0,e.onUploadStart.subscribe(function(){t.mode="initial"}),e.onBadgeDownloadStart.subscribe(function(){t.mode="downloading"}),e.onBadgeDownloadProgress.subscribe(function(e){t.badgeDownloadProgressPercentage=e}),e.onBadgeDownloadComplete.subscribe(function(e){t.mode="ready",t.badge=e})}return e.prototype.ngOnInit=function(){},e}();s=i([n.i(o.Component)({selector:"app-social-preview",template:n("qKFZ"),styles:[n("Vop8")]}),a("design:paramtypes",["function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],s);var c},SfAJ:function(e,t,n){"use strict";var o=n("/oeL"),r=n("bm2B"),i=n("u558");n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){var n=this;this.fileChosen=!1,this.uploadProgressPercentage=0,this.mode="choose",this.uploadForm=e.group({file:[null,r.h.required]}),this.service=t,this.service.onUploadStart.subscribe(function(){n.mode="uploading"}),this.service.onUploadProgress.subscribe(function(e){n.uploadProgressPercentage=e}),this.service.onUploadComplete.subscribe(function(){n.mode="complete"})}return e.prototype.fileChange=function(e){var t=this.fileInput.nativeElement;this.fileChosen=t.files&&!!t.files.length,this.service.registerFileChosen()},e.prototype.submitForm=function(){var e=this.fileInput.nativeElement;if(e.files&&e.files[0]){var t=e.files[0];this.upload(t)}else console.log("no files")},e.prototype.upload=function(e){this.service.uploadProfilePic(e)},e.prototype.reset=function(){this.mode="choose"},e}();a([n.i(o.ViewChild)("fileInput"),s("design:type",Object)],c.prototype,"fileInput",void 0),c=a([n.i(o.Component)({selector:"app-image-uploader",template:n("dPeE"),styles:[n("CvJU")]}),s("design:paramtypes",["function"==typeof(l=void 0!==r.i&&r.i)&&l||Object,"function"==typeof(d=void 0!==i.a&&i.a)&&d||Object])],c);var l,d},Vop8:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".preview,.preview img{max-width:100%}",""]),e.exports=e.exports.toString()},"aR8+":function(e,t,n){"use strict";var o=n("/oeL"),r=n("fc+i"),i=n("fL27"),a=n("CPp0"),s=n("XKz0"),c=n("bm2B"),l=n("Z04r"),d=n("wQAS"),u=n("rgUS"),p=(n.n(u),n("J1D7")),f=n("F/ih"),m=n("bZ3e"),h=n("SfAJ"),g=n("u558"),b=n("pOdO");n.n(b);n.d(t,"a",function(){return y});var v=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=function(){function e(){}return e}();y=v([n.i(o.NgModule)({declarations:[d.a,p.a,f.a,m.a,h.a,b.CeiboShare],imports:[r.a,i.a,a.a,s.a,c.a,c.b,l.a,l.b,l.c,l.d,l.e,l.f],providers:[g.a],bootstrap:[d.a]})],y)},bZ3e:function(e,t,n){"use strict";var o=n("/oeL"),r=n("bm2B"),i=n("u558");n.d(t,"a",function(){return l});var a=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,l=function(){function e(e,t){var n=this;this.ready=!1,this.complexForm=e.group({email:["as.thomson@gmail.com",r.h.compose([r.h.required,r.h.pattern(c)])],festival_news:!0}),this.service=t,this.service.onUploadStart.subscribe(function(e){n.ready=!1}),this.service.onShare.subscribe(function(e){n.ready=!0})}return e.prototype.submitForm=function(e){this.service.enterPrizeDraw(e.email,e.festival_news)},e}();l=a([n.i(o.Component)({selector:"app-email-collector",template:n("Hhbu"),styles:[n("6Dmy")]}),s("design:paramtypes",["function"==typeof(d=void 0!==r.i&&r.i)&&d||Object,"function"==typeof(u=void 0!==i.a&&i.a)&&u||Object])],l);var d,u},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("/oeL"),r=n("Qa4U"),i=n("aR8+");n("p5Ee").a.production&&n.i(o.enableProdMode)(),n.i(r.a)().bootstrapModule(i.a)},dPeE:function(e,t){e.exports='<form [formGroup]="uploadForm" (ngSubmit)="submitForm(uploadForm.value)">\n\n  <div *ngIf=" mode == \'choose\' ">\n\n    <div class="file-chooser">\n      <input type="file" (change)="fileChange($event)" name="file" id="file" accept="image/*" #fileInput>\n    </div>\n\n    <button md-button [disabled]="!fileChosen" class="full-width md-raised" type="button" type="submit">\n      Upload Your Guns\n    </button>\n  </div>\n\n  <div *ngIf=" mode == \'uploading\' ">\n    \n    <h2>Uploading</h2>\n    \n    <md-progress-bar\n        [color]="\'primary\'"\n        [mode]="\'determinate\'"\n        [value]="uploadProgressPercentage">\n    </md-progress-bar>\n\n    <button md-button class="md-raised" (click)="reset()">\n      Choose another image\n    </button>\n\n  </div>\n\n  <div *ngIf=" mode == \'complete\' ">\n    \n    <h2>Upload Complete!</h2>\n\n    <p>Now share your #GunsOutForPeace Badge</p>\n\n    <button md-button class="md-raised" (click)="reset()">\n      Choose another image\n    </button>\n    \n    <md-progress-bar\n        [color]="\'primary\'"\n        [mode]="\'determinate\'"\n        [value]="uploadProgressPercentage">\n    </md-progress-bar>\n      \n  </div>\n\n</form>'},efyd:function(e,t){e.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n\n<h1>\n  #GunsOutForPeace Prototype\n</h1>\n\n<md-card class="example-card">\n  <md-card-header>\n    <div md-card-avatar class="example-header-image"></div>\n    <md-card-title>GunsOutForPeace</md-card-title>\n    <md-card-subtitle>Fuel the campaign</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src="/assets/suns_out_guns_out.jpg">\n  <md-card-content>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio debitis esse assumenda, eaque velit accusantium voluptatem\n      mollitia! Sequi sunt beatae voluptas, dolore molestiae in provident quae soluta rem ut repudiandae.\n    </p>\n  </md-card-content>\n</md-card>\n\n<h1>\n  Make your own #GunsOutForPeace card\n</h1>\n\n<section>\n  <md-toolbar color="primary">\n    <span>1. Upload your guns</span>\n  </md-toolbar>\n  <app-image-uploader>\n  </app-image-uploader>\n</section>\n\n<section>\n  <md-toolbar color="primary">\n    <span>2. Preview your guns</span>\n  </md-toolbar>\n\n  <app-social-preview>\n  </app-social-preview>\n\n</section>\n\n\n<section>\n  <md-toolbar color="primary">\n    <span>3. Share</span>\n  </md-toolbar>\n  <app-social-actions>\n  </app-social-actions>\n</section>\n\n<section>\n  <md-toolbar color="primary">\n    <span>4. Prize Draw</span>\n  </md-toolbar>\n  <app-email-collector>\n\n  </app-email-collector>\n</section>'},hxJY:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,"h1{color:#369;font-family:Arial,Helvetica,sans-serif;font-size:250%;text-align:center}.example-card img{max-width:100%}section{padding:1em 0}",""]),e.exports=e.exports.toString()},n7du:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="n7du"},p5Ee:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!0}},qKFZ:function(e,t){e.exports='<div *ngIf=" mode == \'initial\' ">\n  \n  \x3c!-- Empty when initial --\x3e\n\n</div>\n\n<div *ngIf=" mode == \'downloading\' ">\n\n  <h2>Downloading your badge</h2>\n  \n  <md-progress-bar\n    [color]="\'primary\'"\n    [mode]="\'determinate\'"\n    [value]="badgeDownloadProgressPercentage">\n  </md-progress-bar>\n  \n</div>\n\n<div *ngIf=" mode == \'ready\' ">\n  \n  <img src="{{badge.image}}" alt="Peace Badge">\n  \n</div>\n'},u558:function(e,t,n){"use strict";var o=n("/oeL"),r=n("CPp0"),i=n("XKz0");n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=(function(){function e(){}}(),function(){function e(e,t){var n=this;this.http=e,this.httpClient=t,this.urls={upload:"/api/uploadProfilePic",enter:"/api/enterPrizeDraw"},this.headers=new r.b({"Content-Type":"application/json"}),this.onFileChosen=new o.EventEmitter,this.onUploadStart=new o.EventEmitter,this.onUploadProgress=new o.EventEmitter,this.onUploadComplete=new o.EventEmitter,this.onBadgeDownloadStart=new o.EventEmitter,this.onBadgeDownloadProgress=new o.EventEmitter,this.onBadgeDownloadComplete=new o.EventEmitter,this.onShare=new o.EventEmitter,this.onPrizeEntry=new o.EventEmitter,this.registerFileChosen=function(){n.onFileChosen.emit()},this.registerUploadStart=function(){n.onUploadStart.emit()},this.registerUploadProgress=function(e){n.onUploadProgress.emit(e)},this.registerUploadComplete=function(){n.onUploadComplete.emit()},this.registerBadgeDownloadStart=function(){n.onBadgeDownloadStart.emit()},this.registerBadgeDownloadProgress=function(e){n.onBadgeDownloadProgress.emit(e)},this.registerBadgeDownloadComplete=function(){n.onBadgeDownloadComplete.emit(n.badge)},this.registerShare=function(){n.onShare.emit()},this.registerPrizeEntry=function(){n.onPrizeEntry.emit()},this.uploadProfilePic=function(e){var t=new FormData;t.append("image",e,e.name);var o=new i.b("POST",n.urls.upload,t,{reportProgress:!0});return n.registerUploadStart(),n.registerUploadProgress(0),n.httpClient.request(o).subscribe(function(e){if(e.type===i.c.UploadProgress){var t=Math.round(100*e.loaded/e.total);n.registerUploadProgress(t),console.log("File is "+t+"% uploaded.")}else e instanceof i.d&&(console.log("File is completely uploaded!"),n.badge=e.body,n.registerUploadComplete(),n.preloadBadgeImage())},function(e){console.error(e)})}}return e.prototype.preloadBadgeImage=function(){var e=this,t=new i.b("GET",this.badge.image,null,{reportProgress:!0});return this.registerBadgeDownloadStart(),this.registerBadgeDownloadProgress(0),this.httpClient.request(t).subscribe(function(t){if(t.type===i.c.DownloadProgress){var n=Math.round(100*t.loaded/t.total);e.registerBadgeDownloadProgress(n),console.log("File is "+n+"% downloaded.")}else t instanceof i.d&&(console.log("File is completely downloaded!"),e.registerBadgeDownloadComplete())},function(e){console.error(e)})},e.prototype.enterPrizeDraw=function(e,t){return this.http.post(this.urls.enter,JSON.stringify({email:e,festival_news:t}),{headers:this.headers}).subscribe(function(e){console.log(e)},function(e){console.error(e)})},e}());c=a([n.i(o.Injectable)(),s("design:paramtypes",["function"==typeof(l=void 0!==r.c&&r.c)&&l||Object,"function"==typeof(d=void 0!==i.e&&i.e)&&d||Object])],c);var l,d},wQAS:function(e,t,n){"use strict";var o=n("/oeL"),r=n("u558");n.d(t,"a",function(){return s});var i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){}return e}();s=i([n.i(o.Component)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]}),a("design:paramtypes",["function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],s);var c}},[0]);