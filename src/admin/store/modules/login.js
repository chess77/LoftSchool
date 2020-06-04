export default {
    state: {
        error: null,
        success: null,
    },
    mutations: {
        setError(state, payload) {
            state.error = payload;
        },
        clearError(state) {
            state.error = null;
        },
        setSuccess(state, payload) {
            state.success = payload;
        },
        clearSuccess(state) {
            state.success = null;
        },
    },
    actions: {
        closeError({ commit }) {
            commit("clearError");
        },
    },

    getters: {
        errorGet(state) {
            return state.error;
        },
        successGet(state) {
            return state.success;
        },
    },
};
