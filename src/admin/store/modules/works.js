import {baseURL, token} from "./constants";
import $axios from "../../requests";
export default {
    namespaced: true,
    state:{
        works:[],
    },

    mutations: {
        loadWorks(state,payload){
             var  index=0;
             for (index=0; index<payload.length; index++){
                 //console.log(payload[index].photo);
                 payload[index].photo=baseURL+'/'+payload[index].photo;
            }

            state.works=payload

        },

        ADD_WORK(state, works) {
            works.photo=baseURL+'/'+works.photo;
            state.works.push(works)
        },

        REMOVE_WORK(state, deletedWork) {
            state.works = state.works.filter(item => item.id !== deletedWork.id);
            },

        EDIT_WORK(state, editedWork)  {
             state.works = state.works.filter(item => item.id !== editedWork.work.id);
            editedWork.work.photo=baseURL+'/'+editedWork.work.photo;
            state.works.push(editedWork.work)
        }
    },



    actions: {
         async getWorks ({commit}) {
          await  $axios
                .get('/works/322')
                .then(response => {
                    //console.log(response.data)
                    commit('loadWorks',response.data)
                })
              .catch(e=>{
                  commit('setError',e,{root: true});

              })
        },

        async createWorks ({commit},params) {
           try {
               await $axios.post('/works',
                   params,
                   {
                       headers: {
                           'Content-Type': 'multipart/form-data'
                       }
                   }
               ).then(response => {
                   commit('ADD_WORK', response.data)
                   commit('setSuccess',"Работа добавлена",{root: true});
               })
                   .catch(e=>{
                   commit('setError',e,{root: true});

               })
           }
            catch (e) {
                commit('setError',e,{root: true})

            }
        },

        async removeWork({ commit }, work) {

            try {
                await $axios.delete(`/works/${work.id}`)
                    .then(response => {
                        commit('REMOVE_WORK',work)
                        commit('setSuccess',"Работа удалена",{root: true});
                    })
                    .catch(e=>{
                        commit('setError',e,{root: true});

                    })
            } catch (error) {
                commit('setError',error,{root: true});

            }
        },

        async editWork({ commit }, params) {
            try {
                await this.$axios.post(`/works/${params.editWork}`,
                    params.formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        commit("EDIT_WORK", response.data);
                        commit('setSuccess',"Работа сохранена",{root: true});
                    })
                    .catch(e=>{
                        commit('setError',e,{root: true});

                    })
            } catch (error) {
                commit('setError',error,{root: true});


            }
        }
    }


}
