import { 
    compose,
    createStore,
    applyMiddleware
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { logger } from 'redux-logger';

import { rootReducer } from './root-reducer';

// const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
// export const store = createStore(rootReducer, undefined, composedEnhancers);

export const persistor = persistStore(store)