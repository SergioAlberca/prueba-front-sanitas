import { Injectable } from '@angular/core';
import { concat, defer, EMPTY, from, Observable, timer } from 'rxjs';
import { mapTo, mergeMap, tap } from 'rxjs/operators';
import { IDataPicsum } from '../interfaces/data.interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public generatedData: Array<IDataPicsum> = [];

  constructor(private _utilsSrv: UtilsService) {}

  generateData(): Array<IDataPicsum> {
    for (let i = 0; i < 4000; i++) {
      this.generatedData.push({
        id: i.toString(),
        url: `https://picsum.photos/200/300?random=${i}`,
        text: this._utilsSrv.generateRandomText(),
      });
    }

    return this.generatedData;
  }

  public loadData(): Observable<IDataPicsum[]> {
    return new Observable((observer) => {
      observer.next(this.generateData());
      observer.complete();
    });
  }

  public loadDataFiltered(element: string): Observable<IDataPicsum[]> {
    return new Observable((observer) => {
      observer.next(
        this.generatedData.filter(
          (e) => e.id === element || e.text.includes(element)
        )
      );
      observer.complete();
    });
  }
}
