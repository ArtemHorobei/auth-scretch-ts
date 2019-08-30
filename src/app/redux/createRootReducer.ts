import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';

export interface RootState {
    router: RouterState;
}

export default function createRootReducer({ history }: { history: History }) {
    return combineReducers({
        router: connectRouter(history),
    });
}
