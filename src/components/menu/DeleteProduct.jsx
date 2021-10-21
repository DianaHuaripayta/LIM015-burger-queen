import React from "react";
export function DeleteProduct({id, card, setCard }) {
    const productExist = card.find((product) => product.id === id);
    if (productExist.quantity === 1) {
        console.log('EXISTE PRODUCT');
    }else{
        console.log('NO EXISTE')
    }
    return (
        <div>
            
        </div>
    )
}
