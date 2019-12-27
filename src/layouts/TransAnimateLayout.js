import React from 'react';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TransAnimateLayout.less';

const ACTION_MAP = {
    PUSH: 'forward',
    POP : 'back',
};
export default withRouter(({
    location, children, history, match,
}) => {
    const { action } = history;
    console.log(match);
    return (
        <TransitionGroup
            childFactory={
                child => React.cloneElement(
                    child,
                    { classNames: ACTION_MAP[action] },
                )
            }
            className='router-wrapper'

            // enter={true}
            // appear={true}
            // exit={true}
        >
            <CSSTransition
                key={ location.pathname }
                appear
                timeout={ 500 }
                onEnter={
                    () => {
                        console.log('onEnter');
                    }
                }
                onEntered={
                    () => {
                        console.log('onEntered');
                    }
                }
                onEntering={
                    () => {
                        console.log('onEntering');
                    }
                }
                onExit={
                    () => {
                        console.log('onExit');
                    }
                }
                onExited={
                    () => {
                        console.log('onExited');
                    }
                }

                // mountOnEnter={true}
                // unmountOnExit={true}
                onExiting={
                    () => {
                        console.log('onExiting');
                    }
                }
            >
                { children }
            </CSSTransition>
        </TransitionGroup>
    );
});
