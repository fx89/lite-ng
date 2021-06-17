import { Component, OnInit } from '@angular/core';
import { LiteNgToastService } from '../toast.service';

@Component({
  selector: 'lite-ng-serviceable-toast',
  templateUrl: './serviceable-toast.component.html',
  styleUrls: ['./serviceable-toast.component.css']
})
export class LiteNgServiceableToastComponent implements OnInit {

  constructor(public toastService : LiteNgToastService) { }

  ngOnInit() {
  }

}
