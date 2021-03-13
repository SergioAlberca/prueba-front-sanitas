import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { IDataPicsum } from '../../interfaces/data.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public generatedData: Array<IDataPicsum> = [];
  public dataShow: Array<IDataPicsum> = [];
  public limit: number = 10;
  public elementSearched: string = null;

  constructor() {}

  ngOnInit(): void {
    this.generateData();
  }

  generateData(): void {
    for (let i = 0; i < 4000; i++) {
      this.generatedData.push({
        id: i.toString(),
        url: `https://picsum.photos/200/300?random=${i}`,
        text: `Texto Random ${i}`,
      });
    }

    this.dataShow = this.generatedData.slice(0, this.limit);
  }

  loadMoreData(): void {
    this.limit = this.limit + 10;

    this.dataShow = this.generatedData.slice(0, this.limit);

    this.infiniteScroll.complete();

    if (this.dataShow.length == 4000) {
      this.infiniteScroll.disabled = true;
    }
  }

  filterSearch(value: string): void {
    this.elementSearched = value;
  }

  isAvailableData(): boolean {
    return this.dataShow.length > 0;
  }
}
