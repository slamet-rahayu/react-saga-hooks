import { INCREMENT, DECREMENT } from '../constant/counter'

export function counter(state = 0, action){
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}