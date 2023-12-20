// use this function for maintaining the state for all components 
const reducer = (state, action) => {

    switch (action.type) {
        case 'count':
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
}

export default reducer;