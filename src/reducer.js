export const initialState={
    basket: [],
    user: null
};

export const getBasketTotal=(basket)=>{
    return basket?.reduce((amount,item)=>item.price+amount,0);
}

/*Unlike Redux, in reducer's arguments we don't do reducer=(state=initialState,action) as useReducer needs a
reducer argument [like: useReducer(reducer,initialState)] and that reducer should have two arguments: state and 
action. Like reducer=(state,action)=>newState
For more info: https://reactjs.org/docs/hooks-reference.html#usereducer*/
export const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {...state,basket: [...state.basket,action.item]};
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(`Can't remove product (id: ${action.id}) as its not in Basket`);
            }
            return {...state,basket: newBasket};
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};