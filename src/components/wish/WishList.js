import React from 'react';
import PropTypes from 'prop-types';
import WishContainer from './Wish';

export default class WishList extends React.Component {
  static propTypes = {
    listWishes: PropTypes.object
  };
  static defaultProps = {
    listWishes: {}
  };
  render() {
    const listWishes = this.props.listWishes;
    return (
      <div>
        <h3>{listWishes.name}</h3>
        {listWishes.wishes.length !== 0 ? listWishes.wishes.map((wish) => {
          return <WishContainer wish={wish} idList={listWishes.id}/>
        }) : null}
      </div>
    );
  }
}
