import React, { Suspense } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

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
