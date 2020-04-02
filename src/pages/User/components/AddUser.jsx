import { FieldForm, Title } from '@/components';
import { Form, Row, Col } from 'antd';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.fields = [
            {
                type: 'input', id: 'name', decorator: {
                    rules: [
                        { required: true, message: '请输入用户姓名' }
                    ]
                }
            },
        ]
    }
    render() {
        return (
            <div>
                <Title text='查询条件'></Title>
                <Form>

                </Form>
            </div>
        )
    }
}

export default AddUser;