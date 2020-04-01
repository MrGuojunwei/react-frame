import { Form, Row, Col, Input, Button } from 'antd';
import { Suspense } from 'react';

const Login = lazy(() => import('@/pages/Login'));

class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <Suspense fallback='<div>loading...</div>'>
                <Login />
            </Suspense>


        )
    }
}

export default Form.create()(App);
