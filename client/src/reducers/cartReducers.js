/* eslint import/prefer-default-export: 0 */
export const addedToCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        action.itemID
      ];
    case 'REMOVE_FROM_CART': {
      let found = false;
      for (let i = 0; i < state.length; i++) {
        if (state[i].name === action.menuItem.name && !found) {
          state.splice(i, 1);
          found = true;
        }
      }
      return [...state];
    }
    case 'CLEAR_CART': {
      return [];
    }
    default:
      return state;
  }
};

export const cartTotal = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_TOTAL': {
      const newTotal = state + action.itemID.price;
      return newTotal;
    }
    case 'REMOVE_FROM_TOTAL': {
      const newTotal = state - action.itemID.price;
      return newTotal;
    }
    case 'CLEAR_CART_TOTAL':
      return 0;
    default:
      return state;
  }
};
