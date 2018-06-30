import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWishes } from '../../actions/wishesActions';
import WishList from './WishList';

class ListContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func
  };
  static defaultProps = {
    dispatch: () => {}
  };
  componentDidMount() {
    this.props.dispatch(fetchWishes());
  }
  render() {
    return (
      <div>
        <h2>Wish Lists</h2>
        {this.props.listsWishes.length !== 0 ? this.props.listsWishes.map((listWishes) => {
          return <WishList listWishes={listWishes} />
        }) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listsWishes: state.wishes.listsWishes
  }
};

export default connect(
  mapStateToProps
)(ListContainer);

