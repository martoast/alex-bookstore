export const state = () => ({
    errors: {}
})

export const getters = {
    errors(state) {
        return state.errors
    }
}

export const mutations = {
    set(state, errors) {
        state.errors = errors
    },

    delete(state, params) {
        if (params) {
            delete state.errors[params]
        } else {
            state.errors = {}
        }
    }
}

export const actions = {
    setErrors({ commit }, errors) {
        commit('set', errors)
    },

    clearErrors({ commit }, params) {
        commit('delete', params)
    }
}