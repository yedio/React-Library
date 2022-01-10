import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({ counter });

export default rootReducer;
//왜 사용하는지?
export type RootState = ReturnType<typeof rootReducer>;
