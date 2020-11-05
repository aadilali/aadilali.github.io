import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../reducres/mapStateToProps';


function AddToCart(props) {
    console.log('A TO C', props);
    
    const handleClick = (props) => {
        const currentCart = {
            pid: props.pid,
            title: props.title,
            price: props.price,
            image: props.image,
            qty: 1
        }

        props.setCart(currentCart);

    }
    return (
        <div className="addCart">
            <button className="btn btn-primary" onClick={handleClick.bind(this, props)}>Add to Cart</button>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps) (AddToCart);
//export default AddToCart;
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