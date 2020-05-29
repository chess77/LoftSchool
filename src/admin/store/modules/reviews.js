import {baseURL, token} from "./constants";
import $axios from "../../requests";
export default {
    namespaced: true,
    state:{
        reviews:[],
    },

    mutations: {
        loadReviews(state,payload){
            //console.log(payload);
            var  index=0;
            for (index=0; index<payload.length; index++){
                //console.log(payload[index].photo);
                payload[index].photo=baseURL+'/'+payload[index].photo;
            }

            state.reviews=payload

        },

        ADD_REVIEW(state, review) {
            review.photo=baseURL+'/'+review.photo;
            state.reviews.push(review)
        },

        REMOVE_REVIEW(state, deletedReview) {
            state.reviews = state.reviews.filter(item => item.id !== deletedReview.id);
            },

        EDIT_REVIEW(state, editedReview)  {
            console.log(editedReview)

            state.reviews = state.reviews.filter(item => item.id !== editedReview.review.id);
            editedReview.review.photo=baseURL+'/'+editedReview.review.photo;
            state.reviews.push(editedReview.review)
        }
    },



    actions: {
         async getReviews ({commit}) {
          await  $axios
                .get('/reviews/322')
                .then(response => {
                    //console.log(response.data)
                    commit('loadReviews',response.data)
                });
        },

        async createReview ({commit},params) {

           try {
               await $axios.post('/reviews',
                   params,
                   {
                       headers: {
                           'Content-Type': 'multipart/form-data'
                       }
                   }
               ).then(response => {
                   commit('ADD_REVIEW', response.data)
               });
           }
            catch (e) {
                commit('setError',e,{root: true})
            }
        },

        async removeReview({ commit }, review) {

            try {
                await $axios.delete(`/reviews/${review.id}`)
                    .then(response => {
                        commit('REMOVE_REVIEW',review)
                    });
            } catch (error) {
                commit('setError',error,{root: true})
            }
        },

        async editReview({ commit }, params) {
           //  console.log(`/reviews/${params.editReview}`);
            try {
                await this.$axios.post(`/reviews/${params.editReview}`,
                    params.formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {

                        commit("EDIT_REVIEW", response.data);


                    })
            } catch (error) {
                commit('setError',error,{root: true})
            }
        }
    }


}
