import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useSelectedClass from "../../../../hooks/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    return (
        <div >
            <div className="mt-20">
                <h2 className="text-3xl font-semibold text-slate-700">Please Proceed Payment </h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;