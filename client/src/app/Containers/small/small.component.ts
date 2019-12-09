import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket-service.service';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {

  constructor(socket: SocketService) {
    
  }

  ngOnInit() {
  }

}
