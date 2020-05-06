import { TimePicker } from 'antd';
import BaseForm from '../BaseForm';

class TimePickerForm extends BaseForm {
    getComponent() {
        const { config } = this.props;

        return (
            <TimePicker {...config} />
        )
    }
}

TimePickerForm.propTypes = {
    config: PropTypes.object
}

TimePickerForm.defaultProps = {
    config: {}
}

export default TimePickerForm;