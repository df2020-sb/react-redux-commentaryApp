import React from 'react';
import styles from './AddComment.module.css'

const AddComment = ({ addComment }) => {

  const getDateTime = () => {
    let d = new Date();
    return `${("0" + d.getDate()).slice(-2)}.${("0" + (d.getMonth() + 1)).slice(-2)}.${d.getFullYear()} в ${(
      "0" + d.getHours()
    ).slice(-2)}:${("0" + d.getMinutes()).slice(-2)}:${("0" + d.getSeconds()).slice(-2)}`;
  }

  return (
    <form >
      <input
        className={styles.input}
        required
        type="text"
        placeholder="Ваше имя"
      />

      <textarea
        className={styles.textarea}
        required
        placeholder="Текст комментария"
      />

      <button
        type='button'
        className={styles.button}
        onClick={() => {
          let name = document.querySelector('input').value;
          let text = document.querySelector('textarea').value
          addComment(name, getDateTime(), text);

          document.querySelector('input').value = '';
          document.querySelector('textarea').value = '';
        }}
      >Добавить</button>
    </form >
  );
}

export default AddComment