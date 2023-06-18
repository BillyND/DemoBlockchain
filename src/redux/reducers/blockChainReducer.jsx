import { UPDATE_BLOCKCHAIN } from "../actions/blockChainAction";

const INITIAL_STATE = {
    listBlockChain: 0,
};

const blockChainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_BLOCKCHAIN:
            return {
                ...state,
                listBlockChain: action.payload
            }
        default: return state;
    }
};

export default blockChainReducer;