import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDataPicsum } from '../interfaces/data.interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data_ = new BehaviorSubject<Array<IDataPicsum>>([]);
  private dataPicsumList = this.data_.asObservable();

  constructor(private _utilsSrv: UtilsService) {}

  generateData(): Array<IDataPicsum> {
    const generatedData: Array<IDataPicsum> = [];
    for (let i = 0; i < 4000; i++) {
      generatedData.push({
        id: i.toString(),
        url: `https://picsum.photos/200/300?random=${i}`,
        text: this._utilsSrv.generateRandomText(),
      });
    }

    return generatedData;
  }

  public loadData(): Observable<IDataPicsum[]> {
    this.data_.next(this.generateData());
    return this.dataPicsumList;
  }
}
