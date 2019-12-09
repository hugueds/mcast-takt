import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: SocketIOClient.Socket;

  constructor() {
    // this.socket = io.connect();
  }

  emit(topic, message) {
    this.socket.emit(topic, message);
  }

  subscribe(event) {
    return new Observable(observer => {
      this.socket.on(event, data => observer.next(data));
    });    
  }

  test(event) {
    return new Observable(observer => {
      setInterval(() => observer.next('ETA LELE'), 1000);
    });    
  }

  unsubscribe() {

  }


}
