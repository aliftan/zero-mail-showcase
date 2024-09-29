import EmailTemplatePage from '@/components/EmailTemplatePage';

const invoiceOverdueMjml = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
      <mj-text font-size="14px" color="#555555" line-height="20px" />
      <mj-section background-color="#ffffff" padding="20px" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#f4f4f4">
    <mj-section padding-bottom="0" background-color="#1a2b49">
      <mj-column width="100%">
        <mj-image src="https://via.placeholder.com/200x50/1a2b49/ffffff?text=Your+Logo" alt="Logo" align="center" width="200px" />
      </mj-column>
    </mj-section>
    
    <mj-section background-color="#ffffff" padding="20px" border-radius="8px">
      <mj-column>
        <mj-text font-size="24px" color="#333333" align="center">Invoice Overdue</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          This is a friendly reminder that your invoice is now overdue. We kindly request that you settle the outstanding balance as soon as possible.
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Invoice Number:</strong> {{invoiceNumber}}</mj-text>
            <mj-text font-size="16px"><strong>Original Due Date:</strong> {{originalDueDate}}</mj-text>
            <mj-text font-size="16px"><strong>Days Overdue:</strong> {{daysOverdue}}</mj-text>
            <mj-text font-size="16px"><strong>Outstanding Amount:</strong> {{outstandingAmount}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          To avoid any additional late fees or service interruptions, please make your payment as soon as possible. You can pay your invoice quickly and securely by clicking the button below:
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{payNowUrl}}">Pay Now</mj-button>
        <mj-text font-size="16px" color="#555555">
          If you have already made the payment, please disregard this notice. If you're experiencing financial difficulties or have any questions about this invoice, please contact our billing department to discuss payment options.
        </mj-text>
        <mj-button background-color="#4CAF50" color="#ffffff" href="{{contactBillingUrl}}">Contact Billing Department</mj-button>
        <mj-text font-size="16px" color="#555555">
          We appreciate your prompt attention to this matter and thank you for your continued business.
        </mj-text>
      </mj-column>
    </mj-section>
    
    <mj-section padding-top="20px" background-color="#f4f4f4">
      <mj-column>
        <mj-social font-size="15px" icon-size="30px" mode="horizontal">
          <mj-social-element name="facebook" href="https://facebook.com/yourcompany" />
          <mj-social-element name="twitter" href="https://twitter.com/yourcompany" />
          <mj-social-element name="instagram" href="https://instagram.com/yourcompany" />
        </mj-social>
        <mj-text align="center" font-size="12px" color="#555555">
          123 Business St, Finance City, 12345<br>
          © 2024 Your Company Name. All rights reserved.
        </mj-text>
        <mj-text align="center" font-size="12px" color="#555555">
          Need help? Contact our support team at <a href="mailto:support@yourcompany.com" style="color: #1a2b49;">support@yourcompany.com</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function InvoiceOverduePage() {
    return (
        <EmailTemplatePage
            moduleName="Invoices"
            templateName="Invoice Overdue"
            mjmlContent={invoiceOverdueMjml}
        />
    );
}