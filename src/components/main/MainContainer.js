import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

import Footer from './Footer';
import Header from './Header';

const Main = ({ children }) => (
  <div>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </div>
);

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Main;


// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import ListContainer from './wish/WishListContainer';
// import {fetchWishes} from '../actions/wishesActions';
// import wishes from '../reducers/wishesReducer';
//
//
// // import { doSomething } from '../actions/mainActions';
//
// class MainContainer extends React.Component {
//   static propTypes = {
//     dispatch: PropTypes.func
//   };
//   static defaultProps = {
//     dispatch: () => {}
//   };
//   componentDidMount() {
//     this.props.dispatch(fetchWishes());
//   }
//
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h2>Wish Lists</h2>
//         {this.props.listsWishes.length !== 0 ? this.props.listsWishes.map((listWishes) => {
//           return <ListContainer listWishes={listWishes} />
//         }) : null}
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     listsWishes: state.wishes.listsWishes
//   }
// };
//
// export default connect(mapStateToProps)(MainContainer);
