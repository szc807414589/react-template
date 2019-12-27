import React from 'react';
import { Button } from 'antd-mobile';
import history from '../../history';

class Login extends React.Component {

    render () {
        return (
            <div style={{ width: '100%', height: '100%' }}>
				这里是login页面
                <Button
                    className='test'
                    type='danger'
                    onClick={ () => { history.push('/home') } }
                >
					go home
                </Button>
                <Button onClick={ () => { history.push('homePage/benefit') } }>
					go benefit
                </Button>
                <Button onClick={ () => { history.go(-1) } }>
					back last page
                </Button>
            </div>
        );
    }
}
export default Login;
