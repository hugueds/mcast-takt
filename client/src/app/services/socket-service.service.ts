import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect({ path: '/takt/socket.io' });
  }

  emit(topic, message) {
    this.socket.emit(topic, message);
  }

  event(topic) {
    return new Observable(observer => {
      this.socket.on(topic, data => observer.next(data));
    });
  }

  subscribe(event) {
    return new Observable(observer => {
      this.socket.on(event, data => observer.next(data));
    });
  }

  test(event) {
    return new Observable(observer => {
      setInterval(() => observer.next('ETA LELE'), 5000);
    });
  }

  unsubscribe() {

  }


}
