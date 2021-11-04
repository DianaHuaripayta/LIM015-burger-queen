import React from "react";
export function BodyModal({ order }) {
    const { products, nameCustomer} = order;
   // eslint-disable-next-line array-callback-return
    return (
        <div>
            <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                <div className="card-header"><h5>Cliente: {nameCustomer}</h5></div>
                <div className="card-body">
               {/*  <h4 className="card-title">Primary card title</h4> */}
                <p className="card-text">
                {products.map((product) => (
                    <p key={product.id}>
                        <p> {product.quantity} {product.name} - ${product.price}</p>
                    </p>
                    ))}
                    </p>
                </div>
            </div>
        </div>
    )
}
