import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {

  constructor() { }


  public getById = (id) => {
    console.log('getById' + id);
    return new Promise((resolve, reject) => {
        const item = {
          id,
          name: 'name ' + id
        };
        setTimeout(() => {
          console.log('resolve');
          if (id==2) reject({message: 'some message', ngNavigationCancelingError: true});
          if (id==1) resolve(item);
        }, 1000);
    });
  }

}
