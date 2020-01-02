import { action, decorate, observable } from 'mobx';

class Counter {
  count = 0;

  increase = () => {
    this.count += 1;
  }

  decrease = () => {
    this.count -= 1;
  }
}

export default decorate(Counter, {
  count: observable,
  increase: action,
  decrease: action,
});
