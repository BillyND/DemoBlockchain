import { combineReducers } from 'redux';
import blockChainReducer from './reducers/blockChainReducer';

const rootReducer = combineReducers({
    blockChain: blockChainReducer,
});

export default rootReducer;