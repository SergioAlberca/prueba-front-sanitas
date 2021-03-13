import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: Object): unknown {
    if (!items || !filter) {
      return items;
    }

    return items.filter(
      (element) =>
        element.id == filter || element.text.includes(filter)
    );
  }
}