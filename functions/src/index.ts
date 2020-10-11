const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ideahack2020.firebaseio.com',
})

const firestore = admin.firestore()

exports.matchOccupation = functions.https.onCall(
  async (data: any, context: any) => {
    const rankingResults: Array<string[]> = []

    const matches: string[] = []
    const matchRanks: number[] = []

    const skillSet = data.skillSet

    // Rank skills
    for (const skill of skillSet) {
      const skillID = skill.conceptUri

      // Get the matching occupations
      const occupationMatches = await firestore
        .collection('occupationSkillRelations')
        .where('skillUri', '==', skillID)
        .get()

      occupationMatches.forEach((doc: any) => {
        const { occupationUri: match } = doc.data()

        if (!matches.includes(match)) {
          matches.push(match)
          matchRanks.push(1)
        } else {
          const matchIndex = matches.indexOf(match)
          matchRanks[matchIndex]++
        }
      })
    }

    // Evaluate ranking
    for (let j = 0; j < 3; j++) {
      const maxRank = Math.max(...matchRanks)
      let indicesOfMaxElements = matchRanks
        .map((value, index) => {
          if (value === maxRank) {
            return index
          }
          return
        })
        .filter((value) => typeof value === 'number')

      const occupationsRankedAtPosition: string[] = []

      for (const indexOfMatch of indicesOfMaxElements) {
        // Get Occupation labels
        const result = await firestore
          .collection('occupations')
          .where('conceptUri', '==', matches[indexOfMatch as number])
          .get()

        let matchingOccupationLabel: string

        result.forEach((doc: any) => {
          // console.log(doc.data())
          matchingOccupationLabel = doc.data().preferredLabel
        })

        occupationsRankedAtPosition.push(matchingOccupationLabel!)
      }

      rankingResults.push(occupationsRankedAtPosition)

      for (const index of indicesOfMaxElements) {
        matchRanks.splice(index as number, 1)
        matches.splice(index as number, 1)
      }
    }

    return rankingResults
  }
)
