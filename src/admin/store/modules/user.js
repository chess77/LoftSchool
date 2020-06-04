export default {
    namespaced: true,
    state: {
        user: {},
    },
    mutations: {
        SET_USER: function (state, user) {
            state.user = user;
        },
        CLEAR_USER: (state) => (state.user = {}),
        LOGOUT_USER: function () {
            state.user = {};
        },
    },
    getters: {
        userIsLoggedIn: state => {
            const userObj = state.user;
            const userObjectIsEmpty =
                Object.keys(userObj).length === 0 && userObj.constructor === Object;

            return userObjectIsEmpty === false;
        },
    },
};
