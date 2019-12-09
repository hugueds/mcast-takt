import { Component, OnInit } from '@angular/core';
import Takt from '../../models/Takt';
import { SocketService } from '../../services/socket-service.service';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.css']
})
export class BigComponent implements OnInit {

  takt: Takt;
  theme: boolean;

  constructor(private _socket: SocketService) {
    // Fazer um subscribe para atualizar info
    // _socket.subscribe('takt').subscribe(this.updateData);
    _socket.test('takt').subscribe(this.updateData);
  }

  ngOnInit() {
    this.takt = new Takt();
  }

  updateTheme(newTheme: string) {
    // this.theme = newTheme;
  }

  updateData(data) {

    console.log(this.theme)
    this.theme = !this.theme

    // if (this.theme == 'bigscreen--theme-black')
    //   this.theme = 'bigscreen--theme-white'
    // else
    //   this.theme = 'bigscreen--theme-black'
  }

}
