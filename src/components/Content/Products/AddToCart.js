import React from 'react';

function AddToCart(props) {

    const addToCart = (pObj) => {
        let cObj = pObj.cartObj;

        // Traverse Current cObj
        let cartitemObj = null;
        const isExist = cObj.product.findIndex( proItem => {
            return proItem.pid === pObj.pid;
        });

        if(isExist > -1) {
            cObj.product[isExist].qty +=1;
        } else {
            cartitemObj = {...pObj, 'qty': 1};    
            cObj.product.push(cartitemObj);
        }
        pObj.cartCallBack();
    } 

     return (  
            <div className="addCart">
                <button className="btn btn-primary" onClick={addToCart.bind(this, props)}>Add to Cart</button>
            </div>
            
    )
    
} 
 
export default AddToCart;
// class AddToCart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             customer_id: '',
//             date: new Date(),
//             products:[]
//             }
//     }

//      addToCart = (event) => {
//         console.log("CLICKED ", event);
//         let tempPerson = {id: event.pid, name: event.title};
//         this.setState({
//             products: [...this.state.products, tempPerson],
//           });
//         console.log("STAET ", this.state);
//      } 

//     render() { 
//         return (  
//             <div className="addCart"><button className="btn btn-primary" id={this.props.pid} title={this.props.title} onClick={this.addToCart.bind(this, this.props)}>Add to Cart</button></div>
//         )
//     }
    
// }
 
// export default AddToCart;