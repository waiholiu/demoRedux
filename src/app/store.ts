


export interface IAppState {
    counter: number;



}

export function rootReducer(state: IAppState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter : state.counter - action.amount};
    }
    return state;

}