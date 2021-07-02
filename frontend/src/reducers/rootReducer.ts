// Import components, functions, types, variables, and styles
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { postsReducer } from './postsReducer'
import { commentsReducer } from './commentsReducer'
import { authReducer } from './authReducer'

// Types and interfaces
export type TRootState = ReturnType<typeof rootReducer>

// Reducer
const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)
