import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustomer'
})
export class PipeCustomerPipe implements PipeTransform {

  transform(value: any): any {
    return "+62 " + value;
  }

}
