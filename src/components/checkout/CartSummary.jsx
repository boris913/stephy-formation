const CartSummary = ({ items, total }) => {
    return (
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Résumé du Panier</h3>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.title}</span>
              <span>€{item.price}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold">
          <span>Total :</span>
          <span>€{total}</span>
        </div>
      </div>
    );
  };
  
  export default CartSummary;