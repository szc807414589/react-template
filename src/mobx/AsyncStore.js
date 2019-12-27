import {
    observable, action, flow, configure,
} from 'mobx';
import { GetApi } from '../service/axios';

configure({ enforceActions: 'observed' });

class Novel {

	@observable novelList = []

	@action.bound
	getList = flow(function * () {
	    const res = yield GetApi('/novel/top');
	    this.novelList = res;
	})

}

const NovelStroe = new Novel();
export default NovelStroe;
