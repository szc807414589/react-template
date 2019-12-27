import { observable, action } from 'mobx';

class Count {

	@observable value = 0

	@action.bound
	addNum (count) {
	    this.value += count;
	}

	@action.bound
	subNum (count) {
	    this.value -= count;
	}

}

const CountStore = new Count();

export default CountStore;
