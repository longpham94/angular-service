export class Todo {
    tripId: string = '';
    name: string = '';
    des: string = '';
    status: string = '1';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }