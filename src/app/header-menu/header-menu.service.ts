import { Injectable } from '@angular/core';


@Injectable( /* { providedIn: 'root' } */)

export class HeaderMenuService {

  constructor() { }

  consoleLog( msg : string ){
      console.log( msg );
  }
  
}
