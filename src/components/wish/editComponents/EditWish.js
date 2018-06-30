import React from 'react';
import PropTypes from 'prop-types';

export default class EditWish extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func,
    wish: PropTypes.object,
    idList: PropTypes.string
  };
  static defaultProps = {
    wish: {},
    idList: '',
    handleSubmit: () => {},
    dispatch: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      title: props.wish.title,
      cost: props.wish.cost,
      url: props.wish.url
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <p>Компонент для редактирования желания</p>
        <label htmlFor='title'>Текст</label>
        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
        <label htmlFor='text'>Цена</label>
        <input type='text' name='cost' value={this.state.cost} onChange={this.handleChange} />
        <label htmlFor='url'>Ссылка</label>
        <input type='text' name='url' value={this.state.url} onChange={this.handleChange} />
        <input type='submit' value='Сохранить'/>
      </form>
    );
  }
}
