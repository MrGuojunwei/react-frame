import { Suspense } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import SystemLayout from '@/layouts/SystemLayout';

const User = lazy(() => import('@/pages/User'));

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Suspense fallback={<div>loading</div>}>
                <SystemLayout>
                    <User />
                </SystemLayout>
            </Suspense>

        )
    }
}

export default Form.create()(App);
