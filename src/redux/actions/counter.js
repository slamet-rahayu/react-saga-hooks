import { INCREMENT, DECREMENT } from '../constant/counter';

const actions = {
  increment: () => ({
    type: INCREMENT,
  }),
  decrement: () => ({
    type: DECREMENT,
  })
}

export default actions;
