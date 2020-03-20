import BaseForm from '../BaseForm';
import { Switch } from 'antd';

class SwitchForm extends BaseForm {
  getComponent() {
    const {
      id,
      form,
      decorator,
      status,
      value,
      defaultValue,
      extra,
      hasFeedback,
      help,
      htmlFor,
      label,
      labelCol,
      labelAlign,
      required,
      validateStatus,
      wrapperCol,
      colon,
      ...config
    } = this.props;
    return <Switch {...config} />
  }
}

SwitchForm.propTypes = {
  id: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  decorator: PropTypes.object,
  status: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
}

SwitchForm.defaultProps = {
  id: '',
  form: undefined,
  decorator: {},
  status: 'edit',
  value: undefined,
  defaultValue: undefined
}

export default SwitchForm;