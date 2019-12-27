import React from 'react';
import {
    Card, Col, Row,
} from 'antd-mobile';
import { useHistory } from 'react-router-dom';

function Home () {
    const history = useHistory();

    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={ 16 }>
                <Col span={ 8 }>
                    <Card
                        bordered={ false }
                        title='item'
                        onClick={
                            () => {
                                history.push('/about/item');
                            }
                        }
                    >
						这是去item的页面
                    </Card>
                </Col>
                <Col span={ 8 }>
                    <Card
                        bordered={ false }
                        title='Count with Mobx'
                        onClick={
                            () => {
                                history.push('/about/mobx_count');
                            }
                        }
                    >
						使用Mobx的一个计数器页面
                    </Card>
                </Col>
                <Col span={ 8 }>
                    <Card
                        bordered={ false }
                        title='TodoList with Mobx'
                        onClick={
                            () => {
                                history.push('/about/mobx_todo');
                            }
                        }
                    >
						使用Mobx的一个TodoList页面
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
