import InputForm from '../InputForm';
import SelectForm from '../SelectForm';
import RadioForm from '../RadioForm';
import SwitchForm from '../SwitchForm';
import CheckboxForm from '../CheckboxForm';

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
  type: PropTypes.oneOf(['input', 'password', 'textarea', 'number', 'search', 'select', 'radio', 'switch', 'checkbox', 'totalCheckbox']),
}

export default FieldForm;