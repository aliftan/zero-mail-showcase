import EmailTemplatePage from '@/components/EmailTemplatePage';

const withdrawalConfirmationMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Withdrawal Confirmation</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          Your withdrawal request has been processed successfully. Here are the details of your transaction:
        </mj-text>
        <mj-table>
          <tr style="border-bottom: 1px solid #ecedee; text-align: left;">
            <th style="padding: 0 15px 0 0;">Amount:</th>
            <td style="padding: 0 0 0 15px;">{{amount}}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ecedee; text-align: left;">
            <th style="padding: 0 15px 0 0;">Transaction ID:</th>
            <td style="padding: 0 0 0 15px;">{{transactionId}}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ecedee; text-align: left;">
            <th style="padding: 0 15px 0 0;">Date & Time:</th>
            <td style="padding: 0 0 0 15px;">{{dateTime}}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ecedee; text-align: left;">
            <th style="padding: 0 15px 0 0;">New Balance:</th>
            <td style="padding: 0 0 0 15px;">{{newBalance}}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ecedee; text-align: left;">
            <th style="padding: 0 15px 0 0;">Withdrawal Method:</th>
            <td style="padding: 0 0 0 15px;">{{withdrawalMethod}}</td>
          </tr>
        </mj-table>
        <mj-text font-size="16px" color="#555555">
          <br>
          The withdrawn amount will be credited to your selected withdrawal method within 3-5 business days. If you have any questions, please contact our support team.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewTransactionUrl}}">View Transaction</mj-button>
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
          123 E-commerce St, Digital City, 12345<br>
          © 2024 Your E-commerce Company. All rights reserved.
        </mj-text>
        <mj-text align="center" font-size="12px" color="#555555">
          Need help? Contact our support team at <a href="mailto:support@yourcompany.com" style="color: #1a2b49;">support@yourcompany.com</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function WithdrawalConfirmationPage() {
    return (
        <EmailTemplatePage
            moduleName="E-Wallet"
            templateName="Withdrawal Confirmation"
            mjmlContent={withdrawalConfirmationMjml}
        />
    );
}