import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BadgeBuilderService {

  // public
  
  
  // private
  // private stage : Number = 1

  constructor() { }

  // setStage = (new_stage : Number) => {
  //   this.stage = new_stage
  //   this.currentStage.emit(this.stage);
  // }

  // getStage = (new_stage : Number) => {
  //   return this.stage
  // }


  // emitters
  // public currentStage = new EventEmitter();
  public onFileChosen = new EventEmitter();
  public onUploadStart = new EventEmitter();
  public onUploadComplete = new EventEmitter();
  public onPreviewReady = new EventEmitter();
  public onShare = new EventEmitter();
  public onPrizeEntry = new EventEmitter();

  registerFileChosen = () => {
    this.onFileChosen.emit();
  }

  registerUploadStart = () => {
    this.onUploadStart.emit();
  }

  registerUploadComplete = () => {
    this.onUploadComplete.emit();
  }

  registerPreviewReady = () => {
    this.onPreviewReady.emit();
  }

  registerShare = () => {
    this.onShare.emit();
  }

  registerPrizeEntry = () => {
    this.onPrizeEntry.emit();
  }

}
