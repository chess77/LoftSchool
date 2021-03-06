import axios from "axios";
import { baseURL, token } from "./constants";
import regeneratorRuntime from "regenerator-runtime";
import $axios from "../../requests";

export default {
    namespaced: true,
    state: {
        categories: [],
        error: "",
    },

    mutations: {
        loadCategories(state, payload) {
            state.categories = payload;
        },
        addSkill(state, newSkill) {
            state.categories = state.categories.map((category) => {
                if (category.id === newSkill.category) {
                    if (!category.skills) {
                        category.skills = [newSkill];
                    } else {
                        category.skills.push(newSkill);
                    }
                }
                return category;
            });
        },

        ADD_CATEGORY(state, category) {
            state.categories.push(category);
        },
        REMOVE_CATEGORY(state, category) {
            state.categories = state.categories.filter((item) => item.id !== category);
            //state.categories = state.categories.map(findCategory);
        },
        EDIT_CATEGORY(state, editedCategory) {
            const findCategory = (category) => {
                if (category.id === editedCategory.id) {
                    category.category = editedCategory.category;
                }
                return category;
            };
            state.categories = state.categories.map(findCategory);
        },
        REMOVE_SKILL(state, deletedSkill) {
            const removeSkillInCategory = (category) => {
                category.skills = category.skills.filter((skill) => skill.id !== deletedSkill.id);
            };

            const findCategory = (category) => {
                if (category.id === deletedSkill.category) {
                    removeSkillInCategory(category);
                }

                return category;
            };

            state.categories = state.categories.map(findCategory);
        },

        EDIT_SKILL(state, editedSkill) {
            const editSkillInCategory = (category) => {
                category.skills = category.skills.map((skill) => {
                    return skill.id === editedSkill.id ? editedSkill : skill;
                });
            };
            const findCategory = (category) => {
                if (category.id === editedSkill.category) {
                    editSkillInCategory(category);
                }
                return category;
            };
            state.categories = state.categories.map(findCategory);
        },
    },

    actions: {
        async getCategories({ commit }) {
            try {
                await $axios.get("/categories/322").then((response) => {
                    commit("loadCategories", response.data);
                });
            } catch (e) {
                commit("setError", error, { root: true });
            }
        },
        createCategory({ commit }, params) {
            $axios.post("/categories", { title: params.title }).then((response) => {
                commit("ADD_CATEGORY", response.data);
                commit("setSuccess", "Категория добавлена", { root: true });
            });
        },
        editCategory({ commit }, category) {
            console.log(category.category);
            $axios
                .post(`/categories/${category.id}`, category.category)
                .then((response) => {
                    commit("EDIT_CATEGORY", response.data);
                    commit("setSuccess", "Категория сохранена", { root: true });
                })
                .catch((e) => {
                    commit("setError", e, { root: true });
                });
        },
        async addSkill({ commit }, skill) {
            try {
                await $axios
                    .post("/skills", skill)
                    .then((response) => {
                        commit("addSkill", response.data);
                        commit("setSuccess", "Навык добавлен", { root: true });
                    })
                    .catch((e) => {
                        commit("setError", e, { root: true });
                    });
            } catch (e) {
                commit("setError", e);
            }
        },
        async removeCategory({ commit }, category) {
            try {
                await $axios
                    .delete(`/categories/${category}`)
                    .then((response) => {
                        commit("REMOVE_CATEGORY", category);
                        commit("setSuccess", "Категория удалена", { root: true });
                    })
                    .catch((e) => {
                        commit("setError", e, { root: true });
                    });
            } catch (error) {
                commit("setError", error, { root: true });
            }
        },

        async removeSkill({ commit }, skill) {
            try {
                await $axios
                    .delete(`/skills/${skill.id}`)
                    .then((response) => {
                        commit("REMOVE_SKILL", skill);
                        commit("setSuccess", "Навык удален", { root: true });
                    })
                    .catch((e) => {
                        commit("setError", e, { root: true });
                    });
            } catch (error) {
                commit("setError", error, { root: true });
            }
        },

        async editSkill({ commit }, editedSkill) {
            try {
                await this.$axios
                    .post(`/skills/${editedSkill.id}`, editedSkill)
                    .then((response) => {
                        commit("EDIT_SKILL", response.data);
                        commit("setSuccess", "Навык сохранен", { root: true });
                    })
                    .catch((e) => {
                        commit("setError", e, { root: true });
                    });
            } catch (error) {
                commit("setError", error, { root: true });
            }
        },
    },
};
