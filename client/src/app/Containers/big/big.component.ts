import { Component, OnInit } from '@angular/core';
import Takt from '../../models/Takt';
import { SocketService } from '../../services/socket-service.service';
import msToTimeString from '../../utils/msToTimeString';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.css']
})

export class BigComponent implements OnInit {

  takt: Takt;
  theme: string;

  constructor(private _socket: SocketService) {
    // Fazer um subscribe para atualizar info
    // _socket.subscribe('takt').subscribe(this.updateData);    
    _socket.event('takt').subscribe(this.updateData);
  }

  ngOnInit() {
    this.takt = new Takt();
    this.takt.timer = 1000 * 60 * 61;
  }

  updateTheme(newTheme: string) {
    // this.theme = newTheme;
  }

  test(num: number) {

  }

  updateData = (data) => {

    console.log(this);
    this.takt.timer = data.timer;
    this.takt.timeString = msToTimeString(this.takt.timer);
    this.takt.produced = data.produced;
    this.takt.stopTime = data.stopTime;
    this.takt.balance = data.balance;
    
    this.takt.screenColor = data.screenColor;
    this.takt.accumulated = data.accumulated;


  }

}
