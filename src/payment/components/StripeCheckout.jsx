"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import api from "@/src/utils/paymentApi.js";
import PayPalButton from "@/src/payment/components/PayPalButton"
import { useState } from "react";
import Spinner from "@/src/payment/components/Spinner"
require("dotenv").config();
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const stripePromise = loadStripe(
    "pk_test_51OSNL3DxUGSyS0eGhLp8eW01Snj35KhmAz4y7QLV3WSAO7nHrViIQ2NC7bsf5xCyGWuAPozvzvqFhPQSBtmxYxgn00ynyomqo3"
);

const StripeCheckoutForm = ({ orderId }) => {
    const [Loading, setLoading] = useState(false);

    const handlePayPalLoading = (value) => {
        setLoading(value);
    };

    const ShowErrorToast = (message) => {
        toast.error(message);
    };

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        try {
            const { error, token } = await stripe.createToken(
                cardNumberElement
            );

            if (error) {
                throw error;
            } else {
                const values = {
                    token: token.id,
                    orderId: event.target.elements.orderId.value,
                };

                api("POST", "api/payment/create-stripe-payment", values)
                    .then((data) => {
                        window.location.href = "http://localhost:3000/payment/success";
                    })
                    .catch((error) => {
                        ShowErrorToast(error.response.data.error.message);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        } catch (error) {
            ShowErrorToast(error.message)
            setLoading(false);
        }
    };

    return (
        <div className="relative w-full">
            <ToastContainer/>
            {Loading && <Spinner />}
            <div className="max-w-lg mx-auto p-4 w-full bg-gray-100 rounded-lg shadow-md">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto p-4 w-full"
                >
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Payment Information
                    </h1>
                    <p className="text-sm text-gray-500 text-center mb-4">
                        Secured by{" "}
                        <span className="font-bold" style={{ color: "#635BFF" }}>
                            Stripe
                        </span>
                    </p>
                    <input
                        type="hidden"
                        name="orderId"
                        value={orderId}
                        className="hidden"
                    />
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardNumberElement"
                        >
                            Card Number
                        </label>
                        <div className="border border-gray-300 rounded-md p-2">
                            <CardNumberElement className="w-full p-2" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardExpiryElement"
                        >
                            Expiration Date
                        </label>
                        <div className="border border-gray-300 rounded-md p-2">
                            <CardExpiryElement className="w-full p-2" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardCvcElement"
                        >
                            CVC
                        </label>
                        <div className="border border-gray-300 rounded-md p-2">
                            <CardCvcElement className="w-full p-2" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={!stripe}
                        className="w-full bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-400"
                    >
                        Pay
                    </button>
                </form>
                <PayPalButton orderId={orderId} onPayPalLoading={handlePayPalLoading} ShowErrorToast={ShowErrorToast}/>
            </div>
        </div>
    );
};

const StripeCheckoutPage = ({ orderId }) => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
    >
        <Elements stripe={stripePromise}>
            <StripeCheckoutForm orderId={orderId} />
        </Elements>
    </div>
);

export default StripeCheckoutPage;
