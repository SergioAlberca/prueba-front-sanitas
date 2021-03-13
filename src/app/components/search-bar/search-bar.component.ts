import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() setFilter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  emitFilter(evt: any) {
    this.setFilter.emit(evt.srcElement.value);
  }
}
