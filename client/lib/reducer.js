export default (state = {value: 'reducer'}, action) => {
  switch(action.type){
    case 'KEYUP':
      return { ...state, value: action.value }
    default:
      return state
  }
}
