import React from 'react';
import PropTypes from 'prop-types';

export default class EditableText extends React.Component {
  static propTypes = {
    saveText: PropTypes.func,
    handleChange: PropTypes.func,
    text: PropTypes.object
  };
  static defaultProps = {
    saveText: () => {},
    handleChange: () => {},
    text: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      editText: false
    };
    this.switchTextAndInput = this.switchTextAndInput.bind(this);
  }
  switchTextAndInput() {
    if(this.state.editText) {
      this.props.saveText();
    }
    this.setState({editText: !this.state.editText})
  }

  render() {
    const inputText = (<div>
      <input type='text' value={this.props.text} onChange={this.props.handleChange} />
      <input type='button' onClick={this.switchTextAndInput} value='Сохранить'/>
    </div>);
    const text = <p onClick={this.switchTextAndInput}>{this.props.text === '' ? 'Нажмите для ввода' : this.props.text}</p>;
    return this.state.editText ? inputText : text;
  }
}
