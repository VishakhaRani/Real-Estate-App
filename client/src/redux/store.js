import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userReducer  from './user/userSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: userReducer})
//Persist Configuration
const persistConfig = {
    key: 'root',
    storage,
    version:1
}
//Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

//Creating the redux store with teh persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false
    })
  }
)
//Exporting the persistpor object
export const persistor = persistStore(store)