import { useCart } from '../product/context/CartContext';

const OrderPage = () => {
  const { checkoutItems, selectedRoom } = useCart(); // ✅ include selectedRoom

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Order Summary</h2>

      {checkoutItems.length === 0 ? (
        <p className="text-lg text-gray-600">No items in your order.</p>
      ) : (
        <>
          <div className="mb-4 text-lg text-gray-700">
            <strong>Room Number:</strong> {selectedRoom}
          </div>

          <div className="space-y-4">
            {checkoutItems.map((product) => (
              <div
                key={product.product_ndc}
                className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold">{product.brand_name}</h3>
                  <p>{product.generic_name}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>NDC: {product.product_ndc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OrderPage;
