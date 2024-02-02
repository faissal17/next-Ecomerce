"use client"

import StripeCheckoutPage from "@/src/payment/components/StripeCheckout"

export default function Page({ params }) {
    return (
        <div>
            <StripeCheckoutPage orderId={params.orderId}/>
        </div>
    );
}