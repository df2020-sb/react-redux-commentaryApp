const comments = (state = [], action) => {

  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state, { id: action.id, name: action.name, dateTime: action.dateTime, text: action.text }
      ];

    case 'REMOVE_COMMENT':
      return state.filter(comment => comment.id !== action.id)

    default: return state;
  }
}

export default comments;