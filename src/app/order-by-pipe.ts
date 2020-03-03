import { Pipe, PipeTransform } from '@angular/core';
import { rankItem } from './app'

@Pipe({
  name: 'rankBy',
  pure: true
})
export class RankByPipe implements PipeTransform {

  transform(value: rankItem[]): rankItem[] {
    return value.sort((a: rankItem, b: rankItem) => (a.rank > b.rank) ? 1 : -1);
  }

}