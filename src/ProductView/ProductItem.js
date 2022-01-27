import React from 'react';

function ProductItem({product}) {
    console.log(product);
    return (
        <div>
            <ul id="storeTable">
                <li id="check">체크</li>
                <li><img src={product.imageUrl} alt="글" /></li>
                <li>{product.name}</li>
                <li>1</li>
                <li>{product.price}</li>
            </ul>
        </div>
    );
}

export default ProductItem;