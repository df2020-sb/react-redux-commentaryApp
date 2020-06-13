let nextItemId = 0;

export const addComment = (name, dateTime, text) => {
  return {
    type: 'ADD_COMMENT',
    id: nextItemId++,
    name,
    dateTime,
    text
  }
}

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    id
  }
}