import React, { Suspense } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

const Login = lazy(() => import('@/pages/Login'));
const SystemLayout = lazy(() => import('@/layouts/SystemLayout'));

class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <Suspense fallback={<div>loading</div>}>
                <SystemLayout />
            </Suspense>

        )
    }
}

export default Form.create()(App);
