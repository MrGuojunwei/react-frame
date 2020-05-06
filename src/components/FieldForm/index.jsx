import InputForm from '../InputForm';
import SelectForm from '../SelectForm';
import RadioForm from '../RadioForm';
import SwitchForm from '../SwitchForm';
import CheckboxForm from '../CheckboxForm';
import DatePickerForm from '../DatePickerForm';
import RateForm from '../RateForm';
import TreeSelectForm from '../TreeSelectForm';
import CascaderForm from '../CascaderForm';
import SliderForm from '../SliderForm';
import TimePickerForm from '../TimePickerForm';
import UploadForm from '../UploadForm';

class FieldForm extends Component {

  getComponent() {
    const { type, ...restProp } = this.props;
    switch (type) {
      case 'input':
      case 'password':
      case 'textarea':
      case 'number':
      case 'search': return <InputForm type={type} {...restProp} />;
      case 'select': return <SelectForm {...restProp} />;
      case 'radio': return <RadioForm {...restProp} />
      case 'switch': return <SwitchForm {...restProp} />;
      case 'checkbox':
      case 'totalCheckbox': return <CheckboxForm type={type} {...restProp} />
      case 'date':
      case 'month':
      case 'range':
      case 'week': return <DatePickerForm type={type} {...restProp} />
      case 'rate': return <RateForm {...restProp} />
      case 'treeSelect': return <TreeSelectForm {...restProp} />
      case 'cascader': return <CascaderForm {...restProp} />
      case 'slider': return <SliderForm {...restProp} />
      case 'time':
      case 'TimePicker': return <TimePickerForm {...restProp} />
      case 'upload': return <UploadForm {...restProp} />
      default: return <InputForm type={type} {...restProp} />;
    }
  }

  render() {
    return this.getComponent();
  }
}

FieldForm.defaultProps = {
  type: 'input',
}

FieldForm.propTypes = {
  type: PropTypes.oneOf([
    'input',
    'password',
    'textarea',
    'number',
    'search',
    'select',
    'radio',
    'switch',
    'checkbox',
    'totalCheckbox',
    'date',
    'month',
    'range',
    'week',
    'rate',
    'treeSelect',
    'cascader',
    'slider',
    'time',
    'timePicker',
    'upload'
  ]),
}

export default FieldForm;