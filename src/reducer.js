//how data layer looks before anything is added to it, start with user not being logged in
export const initialState = {
    user: null,
};
//actions where we can push info into data layer
export const actionTypes = {
    // push user into data layer
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    //listen to see what action was dispatched
    switch (action.type) {
        //if set user action was dispatched
        case actionTypes.SET_USER:
            //return state but change user to be whatever is dispatched
            return {
                ...state,
                user: action.user,
            };
        default: return state;
    }
}

export default reducer;