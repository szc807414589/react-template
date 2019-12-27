import React from 'react';
import { Button } from 'antd-mobile';
import history from '../../history';

class Home extends React.Component {

	handleClick = path => {
	    history.push(`/homePage/${ path }`);
	};

	render () {
	    return (
	        <div>
				这里是home页面
	            <Button
	                onClick={ () => { this.handleClick('login') } }
	            >
					go login
	            </Button>
	            <Button
	                className='test'
	                type='danger'
	                onClick={ () => { this.handleClick('benefit') } }
	            >
					go benefit
	            </Button>
	        </div>
	    );
	}

}

export default Home;
