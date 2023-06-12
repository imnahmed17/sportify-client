import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <>
            <Helmet>
                <title>Sportify | Payments</title>
            </Helmet>
            {/* <h3 className="text-3xl uppercase text-center">Payment</h3> */}
            
            <div className="flex flex-col justify-center items-center h-[calc(100vh-40px)]">
                <h3 className="text-3xl uppercase text-center">Payment</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price} />
                </Elements>
            </div>
        </>
    );
};

export default Payment;