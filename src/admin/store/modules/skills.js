import axios from 'axios'
import {baseURL, token} from "./constants";
import regeneratorRuntime from "regenerator-runtime";
//const baseUrl="https://webdev-api.loftschool.com";
//axios.defaults.headers['Authorization'] = `Bearer ${token}`;
//axios.defaults.headers['Authorization'] = `Bearer ${token}`;
import $axios from "../../requests";

export default {
    namespaced: true,
    state:{
        categories:[],
        error:'',
    },

    mutations: {

        loadCategories(state,payload){
            state.categories=payload
        },
        addSkill(state, newSkill) {
            state.categories = state.categories.map(category => {
                if (category.id === newSkill.category) {
                    category.skills.push(newSkill);
                }
                return category;
            });
        },

        ADD_CATEGORY (state, category) {
            state.categories.push(category);
            state.error='yyyyyyy'
        },
        REMOVE_CATEGORY(state, category){
            state.categories = state.categories.filter(item => item.id !== category);
            //state.categories = state.categories.map(findCategory);
        },

        REMOVE_SKILL(state, deletedSkill) {
                const removeSkillInCategory = category => {
                    category.skills = category.skills.filter(
                        skill => skill.id !== deletedSkill.id
                    );
                };

                const findCategory = category => {
                    if (category.id === deletedSkill.category) {
                        removeSkillInCategory(category);
                    }

                    return category;
                };

                state.categories = state.categories.map(findCategory);
            },

            EDIT_SKILL(state, editedSkill)  {
                const editSkillInCategory = category => {
                    category.skills = category.skills.map(skill => {
                        return skill.id === editedSkill.id ? editedSkill : skill;
                    });
                };
                const findCategory = category => {
                    if (category.id === editedSkill.category) {
                        editSkillInCategory(category);
                    }
                    return category;
                };
                state.categories = state.categories.map(findCategory);
            }
    },



    actions: {
         async getCategories ({commit}) {
             try {
                 this.dispatch('checkUser')
                 await $axios
                     .get('/categories/322')
                     .then(response => {
                         commit('loadCategories', response.data)
                     });
             } catch (e) {
                 commit('setError',error,{root: true})
             }
        },
        createCategory ({commit},params) {
            this.dispatch('checkUser')
            $axios
                .post('/categories',{"title":params.title})
                .then(response => {
                    commit('ADD_CATEGORY',response.data)
                });
        },
        async addSkill({ commit }, skill) {
            this.dispatch('checkUser')
            try {
                //console.log(skill);
                await $axios.post("/skills", skill)
                    .then(response => {
                        console.log(33333);
                        commit('addSkill',response.data)
                    });
            } catch(e){
                commit('setError',e)
            }
        },
        async removeCategory({ commit }, category) {
            this.dispatch('checkUser')
            try {
                await $axios.delete(`/categories/${category}`)
                    .then(response => {
                        commit('REMOVE_CATEGORY',category)
                    });
            } catch (error) {
                commit('setError',error,{root: true})
            }
        },

        async removeSkill({ commit }, skill) {
            this.dispatch('checkUser')
            try {
                await $axios.delete(`/skills/${skill.id}`)
                    .then(response => {
                        commit('REMOVE_SKILL',skill)
                    });
            } catch (error) {
                commit('setError',error,{root: true})
            }
        },

        async editSkill({ commit }, editedSkill) {
            this.dispatch('checkUser')
            try {
                await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill)
                    .then(response => {
                        commit("EDIT_SKILL", response.data);

                    })
            } catch (error) {
                commit('setError',error,{root: true})
            }
        }
    }

}
