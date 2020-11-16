import { all } from 'redux-saga/effects';

import ProductSaga from './Product/Saga';

export default function* rootSaga() {
    yield all ([
        ProductSaga()
    ])
}