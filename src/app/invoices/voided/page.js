import EmailTemplatePage from '@/components/EmailTemplatePage';

const invoiceVoidedMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Invoice Voided</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          We're writing to inform you that the following invoice has been voided:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Invoice Number:</strong> {{invoiceNumber}}</mj-text>
            <mj-text font-size="16px"><strong>Original Issue Date:</strong> {{originalIssueDate}}</mj-text>
            <mj-text font-size="16px"><strong>Void Date:</strong> {{voidDate}}</mj-text>
            <mj-text font-size="16px"><strong>Voided Amount:</strong> {{voidedAmount}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          Reason for voiding:
        </mj-text>
        <mj-text font-size="16px" color="#555555" font-style="italic">
          {{voidReason}}
        </mj-text>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          What this means for you:
        </mj-text>
        <mj-list>
          <mj-text font-size="14px">• This invoice is no longer valid and should be disregarded.</mj-text>
          <mj-text font-size="14px">• If you've already made a payment for this invoice, a refund will be processed within 5-7 business days.</mj-text>
          <mj-text font-size="14px">• A new, corrected invoice may be issued if applicable.</mj-text>
        </mj-list>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          To view your updated account information or if you have any questions about this voided invoice, please click the button below:
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewAccountUrl}}">View Account</mj-button>
        <mj-text font-size="16px" color="#555555">
          If you have any concerns or need further clarification about this voided invoice, please don't hesitate to contact our billing department.
        </mj-text>
        <mj-button background-color="#4CAF50" color="#ffffff" href="{{contactBillingUrl}}">Contact Billing Department</mj-button>
        <mj-text font-size="16px" color="#555555">
          We apologize for any inconvenience this may have caused and appreciate your understanding.
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

export default function InvoiceVoidedPage() {
    return (
        <EmailTemplatePage
            moduleName="Invoices"
            templateName="Invoice Voided"
            mjmlContent={invoiceVoidedMjml}
        />
    );
}