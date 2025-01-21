import CartItem from "./CartItem";
import DeliveryOptions from "./DeliveryOptions";
import OrderSummary from "./OrderSummary";

export default function CartPage() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[689px_482px] gap-[30px] mt-8">
      <div>
        <DeliveryOptions />
        <div className="mt-[23px]">
          <CartItem />
        </div>
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
}
