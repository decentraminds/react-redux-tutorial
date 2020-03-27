import { createSlice } from '@reduxjs/toolkit'

const forbiddenWords = ["spam", "money"];

let nextId = 0

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
      articles: [],
      remoteArticles: []
  },
  reducers: {
    addArticle(state, action) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.includes(word)
        );
        if(foundWord.length === 0) {
            state.articles.push( { title: action.payload, id: nextId++ } )
        }
    },
    listRemoteArticles(state, action) {
        state.remoteArticles = action.payload ;
    }
  }
})

export const { addArticle, listRemoteArticles } = articleSlice.actions

export default articleSlice.reducer
