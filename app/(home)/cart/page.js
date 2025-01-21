import CartPage from "@/components/cart/CartPage";
import Nothing from "@/components/common/Nothing";

export default function Cart() {
  const cartItem = [];
  return (
    <div>
      {cartItem ? (
        <CartPage />
      ) : (
        <Nothing img="/image/product/norating.svg" title="NO item in cart" />
      )}
    </div>
  );
}
