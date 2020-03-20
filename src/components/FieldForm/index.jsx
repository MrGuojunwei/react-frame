import InputForm from '../InputForm';
import SelectForm from '../SelectForm';
import RadioForm from '../RadioForm';
import SwitchForm from '../SwitchForm';

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
  type: PropTypes.oneOf(['input', 'password', 'textarea', 'number', 'search', 'select', 'radio', 'switch']),
}

export default FieldForm;