import { Component } from '@angular/core';

const URL = '/api/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  fileChanged(e: Event) {
    var target: HTMLInputElement = e.target as HTMLInputElement;
    for(var i=0;i < target.files.length; i++) {
        this.upload(target.files[i]);
    }
  }

  upload(img: File) {
    var formData: FormData = new FormData();
    formData.append("image", img, img.name);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (ev: ProgressEvent) => {
        //You can handle progress events here if you want to track upload progress (I used an observable<number> to fire back updates to whomever called this upload)
    });
    xhr.open("POST", URL);
    xhr.send(formData);
}

}
