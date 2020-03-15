import { InputForm } from '@/components';
import { Form, Button, Row, Col } from 'antd';
import LoginLayout from '@/layouts/LoginLayout';
import './index.module.less';

const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 20
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.fields = [
            { type: 'input', id: 'username', label: '用户名' },
            { type: 'password', id: 'password', label: '密码' }
        ]
    }

    handleSubmit = () => {
        this.props.form.validateFieldsAndScroll(function (err, values) {
            if (err) { return; }
            console.log(values);
        })
    }

    render() {
        return (
            <LoginLayout>

                <Form className='login-wrap'>
                    <h2 className="login-title">后台管理系统</h2>
                    {
                        this.fields.map(item => {
                            return (
                                <InputForm key={item.id} className='input-form' {...item} form={this.props.form} formItemLayout={formItemLayout} />
                            )
                            return
                        })
                    }
                    <div className="button-wrap">
                        <Button type='primary' className="login-button" onClick={this.handleSubmit}>登录</Button>
                    </div>

                </Form>
            </LoginLayout>
        )

    }
}

export default Form.create()(Login);