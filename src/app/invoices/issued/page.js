import EmailTemplatePage from '@/components/EmailTemplatePage';

const invoiceIssuedMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">New Invoice Issued</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          A new invoice has been issued for your account. Here are the details:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Invoice Number:</strong> {{invoiceNumber}}</mj-text>
            <mj-text font-size="16px"><strong>Issue Date:</strong> {{issueDate}}</mj-text>
            <mj-text font-size="16px"><strong>Due Date:</strong> {{dueDate}}</mj-text>
            <mj-text font-size="16px"><strong>Total Amount:</strong> {{totalAmount}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          This invoice includes charges for the following:
        </mj-text>
        <mj-table>
          <tr style="border-bottom: 1px solid #ecedee; text-align: left;">
            <th style="padding: 0 15px 0 0;">Description</th>
            <th style="padding: 0 15px;">Amount</th>
          </tr>
          {{#each invoiceItems}}
          <tr>
            <td style="padding: 0 15px 0 0;">{{this.description}}</td>
            <td style="padding: 0 15px;">{{this.amount}}</td>
          </tr>
          {{/each}}
        </mj-table>
        <mj-text font-size="16px" color="#555555" padding-top="20px">
          To view the full invoice and make a payment, please click the button below:
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewInvoiceUrl}}">View and Pay Invoice</mj-button>
        <mj-text font-size="16px" color="#555555">
          If you have any questions about this invoice, please don't hesitate to contact our billing department.
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

export default function InvoiceIssuedPage() {
    return (
        <EmailTemplatePage
            moduleName="Invoices"
            templateName="Invoice Issued"
            mjmlContent={invoiceIssuedMjml}
        />
    );
}