import React from 'react';
import { connect } from 'react-redux';
import { addComment, removeComment } from '../actions'

import CommentsList from '../components/CommentsList/CommentsList'
import AddComment from '../components/AddComment/AddComment'
import styles from './App.module.css'

let App = (props) => {

  const { comments, addComment, removeComment } = props;

  return (
    <div className={styles.container}>
      <AddComment addComment={addComment} />
      <CommentsList comments={comments} removeComment={removeComment} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, dateTime, text) => dispatch(addComment(name, dateTime, text)),
    removeComment: (id) => dispatch(removeComment(id))
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
