import React from 'react';
import { Button, Tag } from 'antd-mobile';
import { observer, inject } from 'mobx-react';

@inject('NovelStore')
@observer
class Home extends React.Component {

	handleClick = () => {
	    const { NovelStore: { getList }} = this.props;
	    getList();
	}

	render () {
	    const { NovelStore: { novelList },NovelStore} = this.props;
	    return (
	        <div>
				hello mobx async
	            <Button onClick={ this.handleClick }>点击请求数据</Button>
	            <div>
	                {
	                    novelList.map(v => (
	                        <Tag key={ v.title }>
	                            { v.title }
	                        </Tag>
	                    ))
	                }
	            </div>
	        </div>
	    );
	}

}

export default Home;
