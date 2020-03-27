import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { getData } from "../actions/index";
import { fetchRemoteArticles } from "../actions/index";



const Post = ({ articles, fetchRemoteArticles }) => {


    useEffect(() => {
        fetchRemoteArticles();
    }, [fetchRemoteArticles]);

    return (
      <ul>
        {articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
}

function mapStateToProps(state) {
    if(state.remoteArticles) {
        return {
            articles: state.remoteArticles.slice(0, 10)
        };
    }
}

export default connect(
  mapStateToProps,
  { fetchRemoteArticles }
)(Post);
