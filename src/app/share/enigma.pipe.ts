import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enigma'
})
export class EnigmaPipe implements PipeTransform {

  transform(value: any): any {
    return "Rp."+value;
  }

}
