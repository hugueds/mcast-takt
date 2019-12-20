// TODO: 
// Evento para Refresh da tela
// Botões para simular a cor
// Botões para alterar o tema

import { Component, OnInit } from '@angular/core';
import Takt from 'src/app/models/Takt';
import { SocketService } from '../../services/socket-service.service';
import { ClockService } from 'src/app/services/clock.service';
import { HttpTaktService } from 'src/app/services/http-takt.service';
import msToTimeString from '../../utils/msToTimeString';


@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})

export class SmallComponent implements OnInit {

  takt: Takt;
  theme: string;
  clock: string;
  andon: false;

  constructor(
    private _socket: SocketService
    , private _httpTakt: HttpTaktService
    , private _clockService: ClockService
  ) {
    this._socket.event('takt').subscribe(this.updateData);
    this.takt = new Takt();
    this.takt.timer = 600000;
    this.takt.timeString = '00:00';
    // this._clockService.update().subscribe(thi2s.updateClock);
    setInterval( () => _httpTakt.getAndon().subscribe(this.updateData),1000);
    
    window.addEventListener('keydown', this.updateTheme);
  }

  ngOnInit() {
    this.theme = 'smallscreen--theme-white';

  }

  updateData = (data) => {

    this.takt.timer = data.timer;
    this.takt.timeString = msToTimeString(this.takt.timer);    

    if (this.andon) {
      this.theme = 'smallscreen--theme-' + this.takt.themes[data.colorStatus];
    }

  }

  updateClock = (timeString) => {
    this.clock = timeString;
    this.takt.timer -= 1000;
    this.takt.timeString = msToTimeString(this.takt.timer - 1000);
  }

  // For testing proposals
  updateTheme = ({ key }) => {

    const idx = +key;

    if (!isNaN(idx)) {
      this.theme = 'smallscreen--theme-' + this.takt.themes[idx - 1];
    }

  }

}
