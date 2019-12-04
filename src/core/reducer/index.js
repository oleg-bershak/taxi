import { combineReducers } from 'redux';
import auth from '../../App/store/auth';
import card from '../../App/store/card';
import address from '../../App/store/address';
import route from '../../App/store/route';

const rootReducer = combineReducers({
  auth,
  card,
  address,
  route,
});

export default rootReducer;
