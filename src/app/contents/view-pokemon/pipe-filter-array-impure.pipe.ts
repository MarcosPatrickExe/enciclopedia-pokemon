import { Pipe, PipeTransform } from '@angular/core';
import { PipeFilterArrayPipe } from './pipe-filter-array.pipe';

@Pipe({
  name: 'pipeFilterArrayImpure',
  pure: false,
})
export class PipeFilterArrayImpurePipe extends PipeFilterArrayPipe {

}
