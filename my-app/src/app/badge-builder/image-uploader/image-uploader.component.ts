import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BadgeBuilderService } from '../badge-builder.service';

const URL = '/api/';


@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {

  uploadForm: FormGroup;
  service: BadgeBuilderService;

  fileChosen: Boolean = false;
  uploadProgressPercentage: Number = 0;
  mode: String = 'choose'; // [choose || uploading || complete]

  @ViewChild('fileInput') fileInput;

   // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder, service: BadgeBuilderService) {
    // Here we are using the FormBuilder to build out our form.
    this.uploadForm = fb.group({
      // We can set default values by passing in the corresponding value or
      // leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'file' : [null, Validators.required]
    });

    this.service = service;


    // subscribe to upload events
    this.service.onUploadStart.subscribe(() => {
      this.mode = 'uploading';
    });

    this.service.onUploadProgress.subscribe((percentage) => {
      this.uploadProgressPercentage = percentage;
    });

    this.service.onUploadComplete.subscribe(() => {
      this.mode = 'complete';
    });

  }

  fileChange(e: Event) {
    const fi = this.fileInput.nativeElement;
    this.fileChosen = (fi.files && !!fi.files.length);
    this.service.registerFileChosen();
  }

  submitForm(): void {
    const fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        const fileToUpload = fi.files[0];
        this.upload(fileToUpload);
    } else {
      console.log('no files');
    }
  }

  upload(img: File) {

    // Upload the image
    this.service.uploadProfilePic(img);

    // then, events will be triggered and published in the service
  }

  reset() {
    this.mode = 'choose';
  }

}
