import React from 'react';
import { Button } from 'antd-mobile';
import history from '../../history';

class Login extends React.Component {

    render () {
        return (
            <div>
				这里是 user
                <Button onClick={ () => { history.push('/userPage/policy') } }>
					go policy
                </Button>
            </div>
        );
    }

}
export default Login;
