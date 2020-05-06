import { Upload } from 'antd';
import BaseForm from '../BaseForm';

class UploadForm extends BaseForm {

    getComponent() {
        const { config, children } = this.props;

        return (
            <Upload {...config}>
                {children}
            </Upload>
        )
    }
}

UploadForm.propTypes = {
    config: PropTypes.object
}

UploadForm.defaultProps = {
    config: {}
}

export default UploadForm;