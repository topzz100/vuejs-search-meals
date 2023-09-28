import axiosClient from "../axiosClient";


export const searchMeals = ({commit}, keyword) => {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        debugger;
        commit('setSearchMeals', data)
    })
}