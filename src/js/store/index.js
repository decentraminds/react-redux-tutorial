// import { createStore, applyMiddleware, compose } from "redux";

import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import articlesReducer from '../slices/articleSlice';

// import rootReducer from "../reducers/index";
// import { forbiddenWordsMiddleware } from "../middleware";
// import createSagaMiddleware from "redux-saga";
// import apiSaga from "../sagas/api-saga";


// const initialiseSagaMiddleware = createSagaMiddleware();
// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware))
// );
//
// initialiseSagaMiddleware.run(apiSaga);


const store = configureStore({
    reducer: articlesReducer
});


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof articlesReducer>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store;
