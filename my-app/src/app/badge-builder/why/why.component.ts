import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  action: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.action = this.route.parent.snapshot.data.action;
  }

}
