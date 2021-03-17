import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListComponent } from '../../components/list/list.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ListComponent, SearchBarComponent],
  exports: [],
})
export class HomePageModule {}
