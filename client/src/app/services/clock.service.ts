import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ClockService {

  constructor() { }

  update() {
    return new Observable(obs => {
      setInterval(() => {
        let time = new Date().toTimeString().slice(0, 8);
        obs.next(time);
      }, 1000);
    });
  }

  private convertTimeToTimeString() {

  }

}
