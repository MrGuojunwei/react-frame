import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import Login from '@/pages/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <Login />
        )
    }
}

export default Form.create()(App);
