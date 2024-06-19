const initialState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('token'),
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Auth reducer logic
        default:
            return state;
    }
};

export default authReducer;
