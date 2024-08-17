import React from "react";

function Product() {
  function incrementquantity(index)
  {

  }
  const product = [
    {
      price: 9999,
      name: "Iphone 15",
      quantity: 0,
    },
    {
      price: 7999,
      name: "Redmi 10",
      quantity: 0,
    },
  ];
  return (
    <>
    <div className="row">
      <div className="col-6">
        {product.map((temp) => (
          <h2>
                {temp.name}
                <span class="badge text-bg-secondary">₹{temp.price}</span>
                <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">
                        -
                    </button>
                    <button type="button" class="btn btn-warning">
                        {temp.quantity}
                    </button>
                    <button type="button" class="btn btn-success" onClick={this.incrementquantity()}>
                        +
                    </button>
                    <span> <h2>{temp.quantity*temp.price}</h2></span>
                </div>
                
            </h2>
        ))}
      </div>
    </div>
    </>
  );
}

export default Product;
