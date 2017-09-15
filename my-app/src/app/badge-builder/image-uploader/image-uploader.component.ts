import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BadgeBuilderService } from '../badge-builder.service';
import { ActivatedRoute, Router } from '@angular/router';
import {GoogleAnalyticsEventsService} from "../../google-analytics-events.service";

const URL = '/api/';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  actionUserData: any;
  uploadForm: FormGroup;
  action: any;
  fileChosen: Boolean = false;
  uploadProgressPercentage: Number = 0;
  mode: String = 'initial'; // [initial || uploading]

  @ViewChild('fileInput') fileInput;

   // We are passing an instance of the FormBuilder to our constructor
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: BadgeBuilderService,
    private GA: GoogleAnalyticsEventsService
  ) {

    this.uploadForm = fb.group({
      'file' : [null, Validators.required]
    });

    // subscribe to upload events
    this.service.onUploadStart.subscribe(() => {
      this.mode = 'uploading';
    });

    this.service.onUploadProgress.subscribe((percentage) => {
      this.uploadProgressPercentage = percentage;
    });

    this.service.onUploadComplete.subscribe(() => {
      // this.mode = 'initial'; // neccess?
      this.router.navigate(['/badgeBuilder/' + this.action.id + '/story']);
    });

  }

  ngOnInit() {

    // get current action
    this.action = this.route.parent.snapshot.data.action;

    // get current badge (normally, empty unless they have hit the back button or are revisiting)
    this.actionUserData = this.service.getCurrentActionUserData();
  }

  removeUpload() {
    this.service.removeUpload();
    this.actionUserData = this.service.getCurrentActionUserData();
    this.GA.emitEvent("upload", "remove", this.action.title, this.action.id);
  }

  fileChange(): void {
    const fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        const fileToUpload = fi.files[0];
        this.service.uploadProfilePic(fileToUpload);
        this.GA.emitEvent("upload", "start", this.action.title, this.action.id);
    } else {
      console.log('no files');
    }
  }

  cancelUpload() {
    this.service.cancelUploadProfilePic();
    this.mode = 'initial';
    this.GA.emitEvent("upload", "cancel", this.action.title, this.action.id);
  }

}
