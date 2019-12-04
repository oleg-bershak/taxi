import { fork } from 'redux-saga/effects';
import { authSaga, registerSaga } from '../../App/store/auth/sagas';
import { paymentSaga } from '../../App/store/card/sagas';
import { addressSaga } from '../../App/store/address/sagas';
import { routeSaga } from '../../App/store/route/sagas';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(registerSaga);
  yield fork(paymentSaga);
  yield fork(addressSaga);
  yield fork(routeSaga);
}
