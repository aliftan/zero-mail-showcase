export const emailTemplates = {
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
        { name: "Voucher/Promo Code Expired", path: "/vouchers/code-expired", description: "Notify customers that a voucher or promo code has expired" }
    ],
    "Appointment Bookings": [
        { name: "Appointment Sent", path: "/appointments/sent", description: "Notify customer that an appointment has been scheduled" },
        { name: "Appointment Confirmed", path: "/appointments/confirmed", description: "Confirm the scheduled appointment with the customer" },
        { name: "Appointment Rescheduled", path: "/appointments/rescheduled", description: "Inform customer about a rescheduled appointment" },
        { name: "Appointment Reschedule Requested", path: "/appointments/reschedule-requested", description: "Notify about a customer's request to reschedule an appointment" },
        { name: "Appointment Canceled", path: "/appointments/canceled", description: "Inform customer about a canceled appointment" },
        { name: "Appointment Completed", path: "/appointments/completed", description: "Notify customer that an appointment has been completed" },
        { name: "Appointment Review Request", path: "/appointments/review-request", description: "Request a review from the customer after a completed appointment" }
    ],
    "Memberships": [
        { name: "Membership Upgraded", path: "/memberships/upgraded", description: "Notify customer about a membership upgrade" },
        { name: "Membership Expiry Reminder", path: "/memberships/expiry-reminder", description: "Remind customer of an upcoming membership expiration" },
        { name: "Membership Expired", path: "/memberships/expired", description: "Inform customer that their membership has expired" },
        { name: "Membership Level Up", path: "/memberships/level-up", description: "Congratulate customer on reaching a new membership level" },
        { name: "Membership Rewards Received", path: "/memberships/rewards-received", description: "Notify customer of rewards received from their membership" }
    ],
    "Projects": [
        { name: "Project Invitation", path: "/projects/invite", description: "Invite a user to join a project" },
        { name: "Task Assignment", path: "/projects/task-assign", description: "Notify user of a new task assignment" },
        { name: "Task Mention", path: "/projects/task-mention", description: "Alert user when mentioned in a task" },
        { name: "Task Due Reminder", path: "/projects/task-due-reminder", description: "Remind user of an upcoming task due date" },
        { name: "Project Archived", path: "/projects/archived", description: "Inform user that a project has been archived" },
        { name: "Project Deleted", path: "/projects/deleted", description: "Notify user that a project has been deleted" },
        { name: "Monthly Tasks Report", path: "/projects/monthly-report", description: "Send a monthly report of tasks and their statuses" }
    ],
    "Invoices": [
        { name: "Invoice Issued", path: "/invoices/issued", description: "Notify customer that a new invoice has been issued" },
        { name: "Invoice Paid", path: "/invoices/paid", description: "Confirm that an invoice has been paid in full" },
        { name: "Invoice Partially Paid", path: "/invoices/partially-paid", description: "Inform customer about a partial payment on an invoice" },
        { name: "Invoice Overdue", path: "/invoices/overdue", description: "Alert customer about an overdue invoice" },
        { name: "Invoice Voided", path: "/invoices/voided", description: "Notify customer that an invoice has been voided" }
    ]
};