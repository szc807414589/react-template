import React from 'react';
import { Button } from 'antd-mobile';
import history from '../../../history';

class Benefit extends React.Component {

    render () {
        return (
            <div>
				这里是 benefit
                <Button onClick={ () => { history.push('/login') } }>
					go login
                </Button>
                <Button onClick={ () => { history.go(-1) } }>
					返回上一页
                </Button>
            </div>
        );
    }

}
export default Benefit;
