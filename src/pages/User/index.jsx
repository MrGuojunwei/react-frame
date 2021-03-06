import { FieldForm, Title, FieldFormWithCol, ButtonWrap, Container } from '@/components';
import { Form, Row, Col, Checkbox, Button } from 'antd';
import { filterInvalidValue } from '@/utils/filters';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 18
    }
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: ['red', 'green'],
            treeData: [
                {
                    name: '电子设备',
                    code: '01',
                    children: [
                        {
                            name: '手机',
                            code: '01-01'
                        },
                        {
                            name: '电脑',
                            code: '01-02'
                        }
                    ]
                },
                {
                    name: '衣服',
                    code: '02',
                    children: [
                        {
                            name: '上衣',
                            code: '02-01'
                        },
                        {
                            name: '裤子',
                            code: '02-02'
                        }
                    ]
                }
            ]
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
                }, decorator: {
                    rules: [
                        { required: true, message: '必填' }
                    ]
                }
            },
            {
                type: 'week', id: 'date', col: 8, formItem: { label: '日期', ...formItemLayout }, config: {
                    format: 'YYYY-MM-DD HH:mm',
                    style: { width: '100%' }
                }
            },
            {
                type: 'rate', id: 'rate', col: 8, value: 2, formItem: { label: '评分', ...formItemLayout }
            },
            {
                type: 'treeSelect', id: 'treeSelect', col: 8, valueField: 'code', labelField: 'name', formItem: {
                    label: '树选择器', ...formItemLayout
                }, config: {
                    treeData: this.state.treeData
                }
            },
            {
                type: 'input', id: 'name', col: 8, formItem: { label: '姓名', ...formItemLayout }, decorator: {
                    rules: [
                        { required: true, message: '必填' }
                    ]
                }
            },
            {
                type: 'cascader', id: 'cascader', col: 8, formItem: { label: '树', ...formItemLayout }, valueField: 'aaa', labelField: 'bbb', childrenField: 'ccc', config: {
                    options: [
                        {
                            aaa: 'label1',
                            bbb: 'value1',
                            ccc: [
                                {
                                    aaa: 'label1-1',
                                    bbb: 'value1-1'
                                },
                                {
                                    aaa: 'label1-2',
                                    bbb: 'value1-2'
                                }
                            ]
                        },
                        {
                            aaa: 'label2',
                            bbb: 'value2',
                            ccc: [
                                {
                                    aaa: 'label2-1',
                                    bbb: 'value2-1'
                                },
                                {
                                    aaa: 'label2-2',
                                    bbb: 'value2-2'
                                }
                            ]
                        }
                    ]
                }
            },
            {
                type: 'time', id: 'time', col: 8, formItem: { label: '时间', ...formItemLayout },
                config: {
                    style: { width: '100%' }
                }
            },
            {
                type: 'upload', id: 'upload', col: 8, formItem: { label: '上传', ...formItemLayout }, children: this.getUploadChild()
            }
        ]
    }

    getData = () => {
        this.props.form.validateFields((error, values) => {
            console.log(filterInvalidValue(values));
        })
    }

    getUploadChild = () => {
        return <Button>上传</Button>
    }

    render() {
        return (
            <div>
                <Container>
                    <Title text='查询条件' />
                    <Form>
                        <Row>
                            {
                                this.fields.map((field) => {
                                    return <FieldFormWithCol {...field} key={field.id} form={this.props.form} />
                                })
                            }
                        </Row>
                        <RowStyle>
                            <ButtonWrap>
                                <Button onClick={this.getData} type='primary'>查询</Button>
                                <Button onClick={this.getData} type='primary'>重置</Button>
                                <Button onClick={this.getData} type='primary'>导出</Button>
                            </ButtonWrap>
                        </RowStyle>
                    </Form>
                </Container>

                <ListWrap>
                    <Container>
                        <Title text='查询结果' />
                    </Container>
                </ListWrap>
            </div>
        )
    }
}

const RowStyle = styled(Row)`
    text-align: center;
`

const ListWrap = styled.div`
    margin-top: 20px;
`

export default Form.create()(User);