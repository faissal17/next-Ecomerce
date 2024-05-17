import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import api from "@/src/utils/paymentApi";
import Spinner from "./Spinner";

const PaymentsList = () => {
    const [payments, setPayments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    const ShowErrorToast = (message) => {
        toast.error(message);
    };

    useEffect(() => {
        try {
            setLoading(true)
            api("GET", "api/payment")
                .then((data) => {
                    setLoading(false)
                    setPayments(data);
                })
                .catch((error) => {
                    ShowErrorToast(error.response.data.error.message);
                    console.error(error);
                });
        } catch (error) {
            ShowErrorToast("Error getting payments");
            console.error(error);
        }
    }, []);

    const filteredPayments = payments.filter(
        (payment) =>
            payment.order.customer.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            payment.order.customer.email
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            payment.paymentMethod
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto mt-8 px-4">
            {loading && <Spinner />}
            <ToastContainer />
            <h1 className="text-3xl font-bold mb-4">Payments</h1>
            <div className="bg-white p-4 rounded shadow-md">
                <input
                    type="text"
                    placeholder="Search By Customer info or Payment Method"
                    className="mb-4 p-2 border rounded w-96"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">Payment ID</th>
                            <th className="border p-2">Amount</th>
                            <th className="border p-2">Payment Date</th>
                            <th className="border p-2">Payment Method</th>
                            <th className="border p-2">
                                Stripe or Paypal Payment ID
                            </th>
                            <th className="border p-2">Order Status</th>
                            <th className="border p-2">Customer Name</th>
                            <th className="border p-2">Customer Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment) => (
                            <tr key={payment.id}>
                                <td className="border p-2">{payment.id}</td>
                                <td className="border p-2">
                                    {payment.amount} {payment.currency}
                                </td>
                                <td className="border p-2">
                                    {new Date(
                                        payment.paymentDate
                                    ).toLocaleString()}
                                </td>
                                <td className="border p-2">
                                    {payment.paymentMethod}
                                </td>
                                <td className="border p-2">
                                    {payment.paymentMethod === "paypal"
                                        ? payment.paypalPaymentId
                                        : payment.stripePaymentId}
                                </td>
                                <td className="border p-2">
                                    {payment.order.status}
                                </td>
                                <td className="border p-2">
                                    {payment.order.customer.name}
                                </td>
                                <td className="border p-2">
                                    {payment.order.customer.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentsList;
