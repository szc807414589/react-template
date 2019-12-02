Mobx使用方法总结
=====
 ##1 跟节点引入Provider
        
 ##2 Store
 ###2.1同步
        import {observable, action} from "mobx"
        configure({ enforceActions: 'observed' })//严格模式
        @observable value = 0
        value就是这个store,需要修改的话
        @action.bound
        //注意: action.bound 不要和箭头函数一起使用；箭头函数已经是绑定过的并且不能重新绑定。
                       
        function(){
            this.value=xxx
        }
 ###2.2异步
        import { observable, action, flow, configure } from "mobx"
        @action.bound
        getList = flow(function* () {
            const res = yield GetApi('/novel/top')
            this.novelList = res
        })
 ###2.3
        整合store,在根节点Provider中引入store {...Store}
        
 ##3页面/组件中使用
        import { observer, inject } from "mobx-react"
        
        @inject('TodoListStore')
        @observer
        const { TodoListStore: { addTodo } } = this.props
        const { TodoListStore: { todoList, filterStatus } } = this.props