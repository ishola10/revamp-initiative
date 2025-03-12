import { PaystackButton } from "react-paystack";

interface PaystackProps {
  email: string;
  amount: number;
  onSuccess: (response: any) => void;
}

const PaystackPaymentButton: React.FC<PaystackProps> = ({ email, amount, onSuccess }) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  if (!publicKey) {
    console.error("Missing Paystack Public Key. Please check your .env file.");
    return null;
  }

  const paystackConfig = {
    email,
    amount: amount * 100,
    publicKey,
    currency: "NGN",
    onSuccess,
    onClose: () => alert("Payment window closed."),
  };

  return (
    <PaystackButton
      {...paystackConfig}
      className="bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-800 transition"
    >
      Donate Now
    </PaystackButton>
  );
};

export default PaystackPaymentButton;
