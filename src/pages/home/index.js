import React from 'react';
import { Button } from 'antd-mobile';
import history from '../../history';

class Home extends React.Component {

    render () {
        return (
            <div>
				这里是home页面
                <Button onClick={ () => { history.push('/login') } }>go login</Button>
                <Button onClick={ () => { history.push('/homePage/benefit') } }>go benefit</Button>
            </div>
        );
    }

}
export default Home;
