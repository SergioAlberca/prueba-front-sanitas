import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  generateRandomText(): string {
    let random1 = Math.round(Math.random()*5);
    let random2 = Math.round(Math.random()*10)
    let text = `Texto Random ${random1}${random2}`;

    return text;
  }
}
