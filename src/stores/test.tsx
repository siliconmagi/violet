import { observable } from 'mobx';

export class Test {
  @observable todos = ['buy milk', 'buy cheese']
  @observable filter = ['buy milk', 'buy cheese']
}

export default new Test
