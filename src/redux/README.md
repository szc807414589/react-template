react-redux 流程

    1 创建Store,引入createStore,applyMiddleware
    2 在跟节点引入Provider,引用Store
    
    3 编写actions 
        actions只用来操作state
    4 编写reducer
        reducer只能传入旧的state和action 返回新的state
    5 导出合并combineReducers
    
    6 在页面使用
        引入connect,引入actions函数
        用connect包裹页面(可使用@connect,需要配置webpack,只能class有效)
        mapStateToProps:该页面需要用到的state
        mapDispatchToProps:该页面需要用到的actions方法
        
       
    
    