import EmailTemplatePage from '@/components/EmailTemplatePage';

const paymentFailedMjml = `
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
    
    <mj-section background-color="#ffffff" padding-top="40px" padding-bottom="40px">
      <mj-column>
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Payment Failed</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          We're sorry, but there was an issue processing your payment for order #{{orderNumber}}. Don't worry, your order has been saved and you can still complete your purchase.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Order Summary</mj-text>
        <mj-table>
          <tr style="border-bottom:1px solid #ecedee;text-align:left;">
            <th style="padding: 0 15px 0 0;">Item</th>
            <th style="padding: 0 15px;">Qty</th>
            <th style="padding: 0 0 0 15px;">Price</th>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">Product Name 1</td>
            <td style="padding: 0 15px;">1</td>
            <td style="padding: 0 0 0 15px;">$XX.XX</td>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">Product Name 2</td>
            <td style="padding: 0 15px;">1</td>
            <td style="padding: 0 0 0 15px;">$YY.YY</td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Total Amount Due: $ZZ.ZZ</mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="18px" color="#1a2b49">Next Steps:</mj-text>
        <mj-text>
          1. Review your payment information to ensure it's correct.
          <br>
          2. Check with your bank to make sure there are no issues with your account.
          <br>
          3. Try the payment again by clicking the button below.
        </mj-text>
        <mj-button background-color="#1a2b49" color="#ffffff" href="{{retryPaymentUrl}}">Retry Payment</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          If you continue to experience issues, please contact our customer support team for assistance.
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
        <mj-text align="center" font-size="12px">
          123 E-commerce St, Digital City, 12345<br>
          © 2024 Your E-commerce Company. All rights reserved.
        </mj-text>
        <mj-text align="center" font-size="12px">
          Need help? Contact our support team at <a href="mailto:support@yourcompany.com" style="color: #1a2b49;">support@yourcompany.com</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function PaymentFailedPage() {
    return (
        <EmailTemplatePage
            moduleName="Cart and Checkout"
            templateName="Payment Failed"
            mjmlContent={paymentFailedMjml}
        />
    );
}