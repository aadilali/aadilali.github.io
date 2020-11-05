import { createStore } from 'redux';

const counterReducer = (state, action) => {

    console.log(action);
    switch (action.type) {
        case "SET_TECHNOLOGY":
            return {
                ...state,
                tech: action.text
            }
        case "ADD_TO_CART":
            {
                let tempObj = state.product;
                const isExist = tempObj.findIndex( proItem => {
                    return proItem.pid === action.pObj.pid;
                });

                if(isExist > -1) {
                    //cartitemObj = {...store.getState()};
                    tempObj[isExist].qty += 1;
                } else {
                    tempObj.push({
                        pid: action.pObj.pid,
                        title: action.pObj.title,
                        price: action.pObj.price,
                        image: action.pObj.image,
                        qty: 1
                    });
                }

               return { ...state,
                product: tempObj,
               }
            }
        case "REMOVE_FROM_CART":
            {
                let tempObj = state.product;

                const isExist = tempObj.findIndex( proItem => {
                    return proItem.pid === action.pObj.pid;
                });

                if(isExist > -1) {
                 (tempObj[isExist].qty === 1)? tempObj.splice(isExist, 1) : tempObj[isExist].qty -= 1;
                     
                } 
                return { ...state,
                    product: tempObj,
                }
            }
        case "UPDATE_CART":
            {
                let tempObj = state.product;

                    return { ...state,
                    product: tempObj,
                }
            }
        case "wordpress":
            //do something
            break;
        default:
            return state;
    }
}
export default counterReducer;

export const setTechnology = text => ({ type: "SET_TECHNOLOGY", text });

export const addProduct = pObj => ({ type: "ADD_TO_CART", pObj });

export const removeProduct = pObj => ({ type: "REMOVE_FROM_CART", pObj });

export const updateCart = pObj => ({ type: "UPDATE_CART", pObj });

const initialState = {
    tech: "React ",
    customer_id: '',
    date: new Date(),
    product: []
  };

//export const store = createStore(counterReducer, initialState);
export const store = createStore(counterReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    serialize: { 
      options: {
       undefined: true,
       function: function(fn) { return fn.toString() }
      }
    }
  }));
  
  
