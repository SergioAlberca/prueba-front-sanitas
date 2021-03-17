import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { IDataPicsum } from '../../interfaces/data.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public data: Array<IDataPicsum> = [];
  public dataFiltered: Array<IDataPicsum> = [];
  public limit: number = 10;
  public elementSearched: string = null;

  constructor(private _dataSrv: DataService) {}

  ngOnInit(): void {
    this._dataSrv.loadData().subscribe((data) => {
      this.data = data;
    });
  }

  loadMoreData(): void {
    this.limit = this.limit + 10;

    this.infiniteScroll.complete();

    if (this.limit == 4000) {
      this.infiniteScroll.disabled = true;
    }
  }

  getData(): Array<IDataPicsum> {
    return this.elementSearched
      ? this.dataFiltered.slice(0, this.limit)
      : this.data.slice(0, this.limit);
  }

  getDataFiltered(element: string) {
    this._dataSrv.loadDataFiltered(element).subscribe((data) => {
      this.dataFiltered = data;
    });
  }

  filterSearch(value: string): void {
    this.elementSearched = value;
    this.getDataFiltered(this.elementSearched);
  }

  isAvailableData(): boolean {
    return this.data.length > 0;
  }
}
