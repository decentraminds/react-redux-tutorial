import { ADD_ARTICLE } from "../constants/action-types";

import { listRemoteArticles } from '../slices/articleSlice';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function getData() {
  return { type: "DATA_REQUESTED" };
}

export const fetchRemoteArticles = (): AppThunk => (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(repoDetails => {
            dispatch(listRemoteArticles(repoDetails))
        });
}
