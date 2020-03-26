import { actionTypes } from './types'


class NewsReducer {
    static FactoryState(state = null, action) {
        switch (action.type) {
            case actionTypes.LIST_NEWS:
                return action.payload
            default:
                return state
        }
    }
}

export default NewsReducer;