import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterPatch'
})
export class PosterPatchPipe implements PipeTransform {

  transform(value: string ): string {
    return `https://image.tmdb.org/t/p/w500/${value}`;
  }

}
