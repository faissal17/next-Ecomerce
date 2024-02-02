import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/src/utils/paymentApi";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentSuccessPage = () => {
  const [queries, setQueries] = useState({});
  const searchParams = useSearchParams();
  
  const ShowErrorToast = (message) => {
    toast.error(message);
  };

  useEffect(() => {
    const newQueries = Object.fromEntries(searchParams);
    setQueries(newQueries);
    if(Object.keys(newQueries).length !== 0){
      api("POST", "api/payment/paypal-success", newQueries)
        .then((data) => {
          window.location.href="http://localhost:3000/payment/success";
        })
        .catch((error) => {
          ShowErrorToast(error.response.data.error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchParams]);


  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ToastContainer/>
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-gray-800 text-center">
          Payment Successful
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Thank you for your purchase! Your payment has been successfully
          processed.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
