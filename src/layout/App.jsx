import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { InputForm, SelectForm } from '../components';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 }
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.fields = [
            { type: 'input', id: 'username', label: '用户名', value: '' },
            { type: 'password', id: 'password', label: '密码', value: '' },
            { type: 'textarea', id: 'textarea', label: '文本域', value: '' },
            {
                type: 'number', id: 'age', label: '年龄', value: '', config: {
                    style: { width: '100%' }
                }
            },
            {
                type: 'search', id: 'search', label: '年龄', value: '', decorator: {
                    rules: [
                        { required: true, message: '请输入年龄' }
                    ]
                }
            },
            {
                type: 'select', id: 'select', label: '供应商', value: '', valueField: 'id', labelField: 'name', options: [
                    { id: 'supplier1', name: '供应商1' },
                    { id: 'supplier2', name: '供应商2' },
                    { id: 'supplier3', name: '供应商3' },
                    { id: 'supplier4', name: '供应商4' }
                ]
            }
        ]
    }

    handleSubmit = () => {
        this.props.form.validateFieldsAndScroll(function (err, values) {
            if (err) return;
            console.log(values);
        })
    }

    getForm = () => {
        return (this.fields.map(item => {
            switch (item.type) {
                case 'input':
                case 'password':
                case 'textarea':
                case 'number':
                case 'search': return <InputForm key={item.id} {...item} form={this.props.form} formItemLayout={formItemLayout} />;
                case 'select': return <SelectForm key={item.id} {...item} form={this.props.form} formItemLayout={formItemLayout} />;
            }
        }))
    }

    render() {
        return (
            <Form>
                {this.getForm()}
                <Button type='primary' onClick={this.handleSubmit}>提交</Button>
            </Form>
        )
    }
}

export default Form.create()(App);