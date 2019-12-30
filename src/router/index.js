import React  from 'react';
import { Router, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import history from '../history';
import './style.less';
import { renderRouter } from './renderRouter';
import { routesConfig } from './config';




//过滤路由前进和后退的时候添加不同的className
const ACTION_MAP = {
    PUSH: 'forward',
    POP : 'back',
};
const TransTime = 300;

//在所有路由最外层加上动画,根据history.action来区分前进后退,展示不同的动画
/*
*  1
* old : exit exit-active
* new : enter enter-active
*  2
* old : 移除
* new : enter-done
*
*   tab页面需要单独处理.tab切换的时候不做动画处理
* */
const TransRouter = withRouter(({ location, history }) => {
    const { pathname } = location;
    return (
        <TransitionGroup
            childFactory={
                child => React.cloneElement(child, {
                    classNames:
						pathname === '/home' || pathname === '/home/user' ?
						    `Tab-${ ACTION_MAP[history.action] }` :
						    ACTION_MAP[history.action],
                })
            }
            className='router-wrapper'
        >
            <CSSTransition
                key={ pathname }
                appear
                timeout={ pathname === '/home' || pathname === '/home/user' ? 0 : TransTime }
            >
                <div>
                    { renderRouter(routesConfig, { location: location }) }
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
});


const AppRouter = () => (
    <Router history={ history }>
        <TransRouter />
    </Router>
);
export default AppRouter;
