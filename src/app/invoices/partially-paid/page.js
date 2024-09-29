import EmailTemplatePage from '@/components/EmailTemplatePage';

const invoicePartiallyPaidMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Invoice Partially Paid</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          We've received a partial payment for your invoice. Thank you for your payment. Here are the details:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Invoice Number:</strong> {{invoiceNumber}}</mj-text>
            <mj-text font-size="16px"><strong>Payment Date:</strong> {{paymentDate}}</mj-text>
            <mj-text font-size="16px"><strong>Amount Paid:</strong> {{amountPaid}}</mj-text>
            <mj-text font-size="16px"><strong>Remaining Balance:</strong> {{remainingBalance}}</mj-text>
            <mj-text font-size="16px"><strong>Payment Method:</strong> {{paymentMethod}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          Your account has been credited with this partial payment. Here's a summary of the invoice status:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Original Invoice Amount:</strong> {{originalAmount}}</mj-text>
            <mj-text font-size="16px"><strong>Total Paid to Date:</strong> {{totalPaidToDate}}</mj-text>
            <mj-text font-size="16px"><strong>Remaining Balance:</strong> {{remainingBalance}}</mj-text>
            <mj-text font-size="16px"><strong>Due Date for Remaining Balance:</strong> {{remainingBalanceDueDate}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          To view your payment history or make an additional payment, please click the button below:
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewInvoiceUrl}}">View Invoice & Make Payment</mj-button>
        <mj-text font-size="16px" color="#555555">
          If you have any questions about this partial payment or the remaining balance, please don't hesitate to contact our billing department.
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

export default function InvoicePartiallyPaidPage() {
    return (
        <EmailTemplatePage
            moduleName="Invoices"
            templateName="Invoice Partially Paid"
            mjmlContent={invoicePartiallyPaidMjml}
        />
    );
}