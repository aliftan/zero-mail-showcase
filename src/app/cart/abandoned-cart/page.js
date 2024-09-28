import EmailTemplatePage from '@/components/EmailTemplatePage';

const abandonedCartMjml = `
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Did you forget something?</mj-text>
        <mj-text font-size="16px" color="#555555">
          Hi {{customerName}},
          <br><br>
          We noticed you left some items in your cart. Don't miss out on these great products!
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Your Cart</mj-text>
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
                  <td style="padding-left: 15px;">Product Name 1</td>
                </tr>
              </table>
            </td>
            <td style="padding: 0 15px;">1</td>
            <td style="padding: 0 0 0 15px;">$XX.XX</td>
          </tr>
          <tr class="product-item">
            <td style="padding: 10px 15px 10px 0;">
              <table>
                <tr>
                  <td><img src="https://via.placeholder.com/80x80" width="80" height="80" /></td>
                  <td style="padding-left: 15px;">Product Name 2</td>
                </tr>
              </table>
            </td>
            <td style="padding: 0 15px;">1</td>
            <td style="padding: 0 0 0 15px;">$YY.YY</td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          These items are still waiting for you. Complete your purchase now before they sell out!
        </mj-text>
        <mj-button background-color="#1a2b49" color="#ffffff" href="{{cartUrl}}">Complete Your Purchase</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-size="16px" font-weight="bold">
          Need help?
        </mj-text>
        <mj-text>
          If you have any questions or need assistance, our customer support team is always here to help.
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

export default function AbandonedCartPage() {
    return (
        <EmailTemplatePage
            moduleName="Cart and Checkout"
            templateName="Abandoned Cart Reminder"
            mjmlContent={abandonedCartMjml}
        />
    );
}