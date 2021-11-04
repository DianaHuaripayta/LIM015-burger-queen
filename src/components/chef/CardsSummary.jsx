export function CardsSummary({ order }) {
    const { products, nameCustomer} = order;
    return (
        <div className="card border-primary mb-3" style={{maxWidth: '20rem', margin:'20px'}}>
                <div className="card-header"><h5>Cliente: {nameCustomer}</h5></div>
                <div className="card-body">
                <p className="card-text">
                    {products.map((product) => (
                        <p key={product.id}>
                            <p> {product.quantity} {product.name} - ${product.price}</p>
                        </p>
                        ))}
                </p>
                </div>
        </div>
    )
}
