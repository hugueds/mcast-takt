import { Component, OnInit } from '@angular/core';
import SoftwareStatus from '../../models/SoftwareStatus';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  status: SoftwareStatus;

  constructor() { }

  ngOnInit() {
  }

}
