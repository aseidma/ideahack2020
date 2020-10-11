export const state = () => ({

})


export const mutations = {
    setOccupationMatches(state, payload) {
        return state.matchingOccupations = payload
    }
}

export const actions = {
    async findMatchingOccupations(vuexContext, payload) {
        // TODO: Fetch Data from Algorithm
        

        // TODO: return fetched data
        return vuexContext.commit("setOccupationMatches", payload)
    }
}