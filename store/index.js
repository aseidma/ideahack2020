export const state = () => ({
    matchingOccupations: []
})


export const mutations = {
    setOccupationMatches(state, payload) {
        return state.matchingOccupations = payload
    }
}

export const actions = {
    async findMatchingOccupations(vuexContext, payload) {
        let matches;
        console.log({ skillSet: payload})

        try {
            const matchOccupation = this.$fireFunc.httpsCallable(
              "matchOccupation"
            );
            matches = await matchOccupation({ skillSet: payload});
          } catch (error) {
            if (error) console.log(error)
          }

        return vuexContext.commit("setOccupationMatches", matches)
    }
}