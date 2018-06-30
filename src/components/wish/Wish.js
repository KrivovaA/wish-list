import React from 'react';
import EditWish from './editComponents/EditWish';
import EditableText from './editComponents/EditableText';
import PropTypes from 'prop-types';
import {saveWishText, saveWish} from '../../actions/wishesActions';
import {connect} from 'react-redux';

class Wish extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    wish: PropTypes.object,
    idList: PropTypes.string
  };
  static defaultProps = {
    wish: {},
    idList: '',
    dispatch: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      editText: false,
      editOpen: false,
      text: props.wish.title
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveText = this.saveText.bind(this);
  }
  saveText() {
    this.props.dispatch(saveWishText(this.state.text, this.props.wish.id, this.props.idList)); //диспатчить новый title
  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event) {
    const wish = {
      title: event.target.title.value,
      cost: event.target.cost.value,
      url: event.target.url.value
    };
    event.preventDefault();
    this.props.dispatch(saveWish(wish, this.props.wish.id, this.props.idList));
    this.setState({text: event.target.title.value});
  }
  render() {
    return (
      <div>
        {this.state.editOpen
          ? <EditWish wish={this.props.wish} handleSubmit={this.handleSubmit}/>
          : <EditableText text={this.state.text} handleChange={this.handleChange} saveText={this.saveText}/>}
        <input type='button' value='edit' onClick={() => this.setState({editOpen: !this.state.editOpen})}/>

      </div>
    );
  }
}
export default connect()(Wish);
