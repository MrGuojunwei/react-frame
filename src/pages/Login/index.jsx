import { FieldForm } from '@/components';
import { Form, Button, Row, Col, Icon, Radio } from 'antd';
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
            {
                type: 'input', id: 'username', value: '', col: 24, config: {
                    prefix: <Icon type='user' />
                }
            },
            {
                type: 'password', id: 'password', value: '', col: 24, config: {
                    prefix: <Icon type="lock" />
                }
            },
            {
                type: 'radio', id: 'gender', value: '0', col: 24, label: '性别', formItemLayout: formItemLayout, options: [
                    { value: '0', label: '男' },
                    { value: '1', label: '女' }
                ]
            }
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
                    <div className="input-wrap-form">
                        {
                            this.fields.map(item => {
                                return (
                                    <Col span={item.col} key={item.id}>
                                        <FieldForm className='input-form' {...item} form={this.props.form} />
                                    </Col>
                                )
                            })
                        }
                        <Button type='primary' style={{ width: '100%' }} onClick={this.handleSubmit}>登录</Button>
                    </div>
                </Form>
            </LoginLayout>
        )

    }
}

export default Form.create()(Login);