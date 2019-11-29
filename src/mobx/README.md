Mobx使用方法总结
=====
 ##1 跟节点引入Provider
        
 ##2 Store
 ###2.1同步
        import {observable, action} from "mobx"
        
        @observable value = 0
        value就是这个store,需要修改的话
        @action.bound
        function(){
            this.value=xxx
        }
 ###2.2异步
        @action.bound
        getList = flow(function* () {
            const res = yield GetApi('/novel/top')
            this.novelList = res
        })