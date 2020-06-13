import React from 'react';
import styles from './CommentsList.module.css'

const CommentsList = ({ comments, removeComment }) => {

  return (
    <ul className={styles.list}>
      {
        comments.map(comment => {
          return (
            <li
              key={comment.id}>
              <div className={styles.header}>
                <div>
                  <span className={styles.name}>{comment.name}</span>
                  <span className={styles.dateTime}>{comment.dateTime}</span>
                </div>
                <button className={styles.deleteBtn} onClick={ev => removeComment(comment.id)}>Удалить</button>
              </div>
              <p className={styles.text}>{comment.text}</p>
            </li >
          )
        })
      }
    </ul >
  );
}

export default CommentsList;