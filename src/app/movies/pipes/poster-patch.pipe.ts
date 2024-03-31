import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterPatch'
})
export class PosterPatchPipe implements PipeTransform {

  transform(value: string | null ): string {
    if (!value) return 'https://i.stack.imgur.com/GNhxO.png'

    return `https://image.tmdb.org/t/p/w500/${value}`;
  }

}
