import { addProduct, removeProduct, setTechnology, updateCart } from "./counterReducer"

export const mapStateToProps = (state) => {
    return {
       product: state.product,
       state: state
    }
}


export const mapDispatchToProps= (dispatch)=>{
    
    return{
        setCart: (pObj) => dispatch(addProduct(pObj)),
        removeCartQty: (pObj) => dispatch(removeProduct(pObj)),
        updateCart: (pObj) => dispatch(updateCart(pObj))
    }
}