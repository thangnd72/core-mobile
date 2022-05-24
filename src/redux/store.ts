import { rootReducer } from './rootReducer';

import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    whitelist: []
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(logger)
});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;