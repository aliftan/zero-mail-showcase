'use client';

import { useRouter } from 'next/navigation';
import { useState } from "react";
import Header from "@/components/Header";

const emailTemplates = {
  "Account Management": [
    { name: "Welcome Email", path: "/account-management/welcome", description: "Greet new users and guide them through next steps" },
    { name: "Password Reset", path: "/account-management/password-reset", description: "Help users securely reset their password" },
    { name: "Account Update Confirmation", path: "/account-management/account-update", description: "Confirm changes made to user account details" },
    { name: "Email OTP Signup Verification", path: "/account-management/otp-verification", description: "Send one-time password for email verification during signup" },
    { name: "Login Log", path: "/account-management/login-log", description: "Notify users of recent login activity on their account" },
    { name: "Account Deletion Request", path: "/account-management/deletion-request", description: "Confirm receipt of account deletion request and provide next steps" },
  ],
  "Orders": [
    { name: "Order Placed", path: "/orders/order-placed", description: "Confirm receipt of a new order" },
    { name: "Order Confirmation", path: "/orders/order-confirmation", description: "Provide order details and next steps" },
    { name: "Order Paid", path: "/orders/order-paid", description: "Confirm successful payment for an order" },
    { name: "Order Canceled", path: "/orders/order-canceled", description: "Notify user of order cancellation" },
    { name: "Shipping Notification", path: "/orders/shipping-notification", description: "Inform user that their order has been shipped" },
    { name: "Delivery Confirmation", path: "/orders/delivery-confirmation", description: "Confirm successful delivery of an order" },
  ],
  "Returns and Refunds": [
    { name: "Return Request Received", path: "/returns/request-received", description: "Acknowledge receipt of a return request" },
    { name: "Return Approved", path: "/returns/approved", description: "Confirm approval of a return request" },
    { name: "Refund Processed", path: "/returns/refund-processed", description: "Notify customer of completed refund" },
  ],
  "Cart and Checkout": [
    { name: "Abandoned Cart Reminder", path: "/cart/abandoned-cart", description: "Remind users of items left in their cart" },
    { name: "Payment Failed", path: "/cart/payment-failed", description: "Alert users of a failed payment attempt" },
  ],
  "Product Interactions": [
    { name: "Product Review Request", path: "/product/review-request", description: "Ask customers to review their recent purchase" },
    { name: "Back-in-stock Notification", path: "/product/back-in-stock", description: "Inform users when a product is back in stock" },
    { name: "Wishlist Item on Sale", path: "/product/wishlist-sale", description: "Notify users of a sale on their wishlist items" },
  ],
  "Customer Engagement": [
    { name: "Newsletter", path: "/engagement/newsletter", description: "Regular updates and content for subscribers" },
    { name: "Special Offers/Promotions", path: "/engagement/special-offers", description: "Inform customers about current deals and promotions" },
    { name: "New Product Announcements", path: "/engagement/new-products", description: "Introduce new products to customers" },
    { name: "Customer Feedback Survey", path: "/engagement/feedback-survey", description: "Request customer feedback to improve services" },
  ],
  "Customer Support": [
    { name: "Support Ticket Opened", path: "/support/ticket-opened", description: "Confirm receipt of a new support request" },
    { name: "Support Ticket Updated", path: "/support/ticket-updated", description: "Provide updates on an ongoing support ticket" },
    { name: "Support Ticket Resolved", path: "/support/ticket-resolved", description: "Confirm resolution of a support issue" },
  ],
  "Promotions and Loyalty": [
    { name: "Birthday Voucher", path: "/loyalty/birthday-voucher", description: "Send a special offer for customer's birthday" },
    { name: "Level-up Promo Code", path: "/loyalty/level-up-promo", description: "Reward customers for reaching a new loyalty tier" },
    { name: "Points Earned Notification", path: "/loyalty/points-earned", description: "Inform customers of new loyalty points earned" },
    { name: "Reward Redemption Confirmation", path: "/loyalty/reward-redeemed", description: "Confirm successful redemption of loyalty rewards" },
  ],
  "E-Wallet": [
    { name: "Top-up Confirmation", path: "/ewallet/topup-confirmation", description: "Confirm successful top-up of funds to the e-wallet" },
    { name: "Withdrawal Confirmation", path: "/ewallet/withdrawal-confirmation", description: "Confirm successful withdrawal of funds from the e-wallet" },
    { name: "Transfer Notification", path: "/ewallet/transfer-notification", description: "Notify user of a successful transfer to/from their e-wallet" },
    { name: "Transaction Receipt", path: "/ewallet/transaction-receipt", description: "Provide a detailed receipt for a wallet balance transaction" },
  ],
  "Vouchers and Promo Codes": [
    { name: "Voucher/Promo Code Issued", path: "/vouchers/code-issued", description: "Deliver a new voucher or promo code to customers" },
    { name: "Voucher/Promo Code Expiry Reminder", path: "/vouchers/expiry-reminder", description: "Remind customers of soon-to-expire vouchers" },
    { name: "Successful Voucher/Promo Code Usage", path: "/vouchers/code-used", description: "Confirm successful application of a voucher or promo code" },
  ],
};

export default function Home() {
  const [activeModule, setActiveModule] = useState("Account Management");
  const router = useRouter();

  const handleViewTemplate = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen p-20 font-sans bg-gray-50">
      <Header />

      <nav className="mb-12">
        <ul className="flex flex-wrap justify-center gap-4">
          {Object.keys(emailTemplates).map((module) => (
            <li key={module}>
              <button
                onClick={() => setActiveModule(module)}
                className={`px-6 py-3 rounded-full text-sm font-medium shadow-sm transition-all duration-300 ease-in-out
                  ${activeModule === module
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  } hover:shadow-md`}
              >
                {module}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {emailTemplates[activeModule].map((template) => (
          <div key={template.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{template.name}</h2>
            <p className="text-gray-600 mb-4 h-12 overflow-hidden">{template.description}</p>
            <button
              onClick={() => handleViewTemplate(template.path)}
              className="inline-block px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out text-sm font-medium"
            >
              View Template
            </button>
          </div>
        ))}
      </main>

      <footer className="mt-16 text-center text-gray-500">
        <p>Crafted with passion by aliftan</p>
      </footer>
    </div>
  );
}