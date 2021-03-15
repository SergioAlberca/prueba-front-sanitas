import { Component, Input, OnInit } from '@angular/core';
import { IDataPicsum } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() data: Array<IDataPicsum> = [];
  @Input() itemToSearch: string;

  constructor() {}

  ngOnInit() {}
}
