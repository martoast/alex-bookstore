export const state = () => ({
    items: [],
    book: {}
});

export const mutations = {
    items: (state, items) => state.items = items,
    book: (state, book) => state.book = book
};

export const actions = {
    async get({ commit }, params) {
        if (params) {
            await this.$axios
                .get("http://localhost:8080/books/", {
                    params: { ...params}
                })
                .then((res) => {
                    commit("items", res.data);
                });
        } else {
            await this.$axios.get("http://localhost:8080/books/").then((res) => {
                commit("items", res.data);
            });
        }
    },

    async find({ commit }, ID) {
        await this.$axios
            .get("http://localhost:8080/books/" + ID)
            .then((res) => {
                commit("book", res.data);
            });
    },

    async store({ commit }, params) {
        if (params.book.ID) {
            return this.$axios.put(
                "http://localhost:8080/books/" + params.book.ID,
                params.form
            );
        }
        return this.$axios.post("http://localhost:8080/books/", params.form);
    },

    async delete({ commit }, ID) {
        return this.$axios.delete("http://localhost:8080/books/" + ID);
    }
};

export const getters = {
    items: (state) => state.items,
    book: (state) => state.book
};
