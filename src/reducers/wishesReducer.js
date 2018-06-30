import { // GET_WISHES,
  START_LOAD_WISHES, FINISH_LOAD_WISHES, SAVE_WISH_TEXT, SAVE_WISH } from '../actions/wishesActions';

const initialState = {
  listsWishes: [],
  loading: false,
  loaded: true
};

const wishesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_WISHES:
    // {
    //   return state.listsWishes;
    // }
    case SAVE_WISH_TEXT:
    {
      console.log(action);
      return {
        ...state,
        listsWishes: state.listsWishes.map(
          (list) => list.id === action.idList
            ? {...list, wishes:
                list.wishes.map((wish) => wish.id === action.idWish
                  ? {...wish, title: action.text} : wish)} :
            list
        )
      };
    }
    case SAVE_WISH:
    {
      console.log(action);
      return {
        ...state,
        listsWishes: state.listsWishes.map(
          (list) => list.id === action.idList
            ? {...list, wishes:
                list.wishes.map((wish) => wish.id === action.idWish
                  ? Object.assign({}, wish, action.wish) : wish)} :
            list
        )
      };
    }
    case START_LOAD_WISHES:
    {
      return Object.assign({}, state, {
        loading: action.loading,
        loaded: action.loaded
      });
    }
    case FINISH_LOAD_WISHES:
    {
      return Object.assign({}, state, {
        listsWishes: action.listsWishes,
        loading: action.loading,
        loaded: action.loaded
      });
    }
    default:
      return state
  }
};

export default wishesReducer
