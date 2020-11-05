import React, { useContext } from 'react';

import { mapStateToProps, mapDispatchToProps } from '../../../reducres/mapStateToProps';
import  { connect } from 'react-redux';

function CartBadge(props) {
    
    const cartObj = props.product;

    //const cartObj = props.context_object;
    console.log('BADGE', props);
    let totalItem = 0;
    if(cartObj.length) {
        cartObj.map( proItem => {
            return totalItem += proItem.qty;
        })
    } 
    // useEffect(() => {

    //     console.log(cartObj);
    //     if(cartObj.product.length) {
    //         cartObj.product.map( proItem => {
    //             totalItem += proItem.qty;
    //         })
    //     } 
       
    // }, [cartObj]);

    return ( 
        <button className="btn">
            <i className="fa fa-shopping-basket"></i>
            <span className="badge">{totalItem}</span>
        </button>
     )
    
}
 
export default connect(mapStateToProps, mapDispatchToProps) (CartBadge);