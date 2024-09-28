import EmailTemplatePage from '@/components/EmailTemplatePage';

const orderCanceledMjml = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
      <mj-text font-size="14px" color="#555555" line-height="20px" />
      <mj-section background-color="#ffffff" padding="20px" />
    </mj-attributes>
    <mj-style>
      .product-item td {
        vertical-align: middle;
      }
    </mj-style>
  </mj-head>
  <mj-body background-color="#f4f4f4">
    <mj-section padding-bottom="0" background-color="#1a2b49">
      <mj-column width="100%">
        <mj-image src="https://via.placeholder.com/200x50/1a2b49/ffffff?text=Your+Logo" alt="Logo" align="center" width="200px" />
      </mj-column>
    </mj-section>
    
    <mj-section background-color="#ffffff" padding-top="40px" padding-bottom="40px">
      <mj-column>
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Order Cancellation</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          We're writing to confirm that your order #{{orderNumber}} has been canceled as requested.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Canceled Order Details</mj-text>
        <mj-table>
          <tr style="border-bottom:1px solid #ecedee;text-align:left;">
            <th style="padding: 0 15px 0 0;">Item</th>
            <th style="padding: 0 15px;">Qty</th>
            <th style="padding: 0 0 0 15px;">Price</th>
          </tr>
          <tr class="product-item">
            <td style="padding: 10px 15px 10px 0;">
              <table>
                <tr>
                  <td><img src="https://via.placeholder.com/80x80" width="80" height="80" /></td>
                  <td style="padding-left: 15px;">Product 1</td>
                </tr>
              </table>
            </td>
            <td style="padding: 0 15px;">2</td>
            <td style="padding: 0 0 0 15px;">$29.99</td>
          </tr>
          <tr class="product-item">
            <td style="padding: 10px 15px 10px 0;">
              <table>
                <tr>
                  <td><img src="https://via.placeholder.com/80x80" width="80" height="80" /></td>
                  <td style="padding-left: 15px;">Product 2</td>
                </tr>
              </table>
            </td>
            <td style="padding: 0 15px;">1</td>
            <td style="padding: 0 0 0 15px;">$49.99</td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Refund Details</mj-text>
        <mj-table>
          <tr>
            <td style="padding: 0 15px 0 0;">Subtotal:</td>
            <td style="padding: 0 0 0 15px;">$109.97</td>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">Shipping:</td>
            <td style="padding: 0 0 0 15px;">$5.99</td>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">Tax:</td>
            <td style="padding: 0 0 0 15px;">$9.50</td>
          </tr>
          <tr style="border-top:1px solid #ecedee;">
            <td style="padding: 5px 15px 0 0;"><strong>Total Refund Amount:</strong></td>
            <td style="padding: 5px 0 0 15px;"><strong>$125.46</strong></td>
          </tr>
        </mj-table>
        <mj-text>
          <strong>Refund Method:</strong> {{refundMethod}}
          <br><br>
          If you've been charged for this order, you will receive a refund within 3-5 business days.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>If you didn't request this cancellation or have any questions, please contact our support team immediately.</mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{supportUrl}}">Contact Support</mj-button>
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

export default function OrderCanceledPage() {
    return (
        <EmailTemplatePage
            moduleName="Orders"
            templateName="Order Canceled"
            mjmlContent={orderCanceledMjml}
        />
    );
}