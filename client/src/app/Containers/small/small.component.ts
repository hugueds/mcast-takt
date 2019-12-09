import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket-service.service';
import Takt from 'src/app/models/Takt';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})

export class SmallComponent implements OnInit {

  takt: Takt;

  constructor(private _socket: SocketService) {
    this._socket.event('takt').subscribe(this.updateData);
  }

  ngOnInit() {

  }

  updateData = (data) => {

  }

}
