import { Component, OnInit } from '@angular/core';
import SoftwareStatus from '../../models/SoftwareStatus';

import { SocketService } from '../../services/socket-service.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  status: SoftwareStatus;

  constructor(private socket: SocketService) { 
    socket.subscribe('ip').subscribe(this.updateInfo)
  }

  ngOnInit() {

  }

  updateInfo = () => {

  }

}
