import { FieldForm, Title, FieldFormWithCol } from '@/components';
import { Form, Row, Col, Checkbox, Button } from 'antd';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 18
    }
}

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: ['red', 'green']
        }

        this.fields = [
            {
                type: 'input', id: 'input', col: 8, formItem: { label: '姓名', ...formItemLayout }
            },
            {
                type: 'checkbox', id: 'checkbox', col: 8, valueField: 'code', labelField: 'name', value: this.state.checkbox, formItem: { label: '颜色', ...formItemLayout }, config: {
                    onChange: (e) => {
                        this.setState({
                            checkbox: e
                        })
                    },
                    options: [
                        { name: '红色', code: 'red' },
                        { name: '蓝色', code: 'blue' },
                        { name: '绿色', code: 'green' },
                    ]
                }
            },
            {
                type: 'radio', id: 'radio', value: '1', col: 8, formItem: { label: '性别', ...formItemLayout }, config: {
                    options: [
                        { value: '1', label: '男' },
                        { value: '0', label: '女' }
                    ]
                }
            },
            {
                type: 'select', id: 'select', value: '0', col: 8, formItem: { label: '性别2', ...formItemLayout }, config: {
                    options: [
                        { value: '1', label: '男' },
                        { value: '0', label: '女' }
                    ]
                }
            },
            {
                type: 'switch', id: 'switch', value: false, col: 8, formItem: { label: '状态', ...formItemLayout }
                , decorator: {
                    valuePropName: 'checked'
                }, config: {
                    checkedChildren: '启用',
                    unCheckedChildren: '禁用',
                    onChange: (e) => {
                        console.log(e)
                    }
                }
            }
        ]
    }

    render() {
        return (
            <div>
                <Title text='查询条件'></Title>
                <Form>
                    {
                        this.fields.map((field) => {
                            return <FieldFormWithCol {...field} key={field.id} form={this.props.form} />
                        })
                    }
                </Form>
            </div>
        )
    }
}

export default Form.create()(AddUser);