import EmailTemplatePage from '@/components/EmailTemplatePage';

const wishlistSaleMjml = `
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Your Wishlist Item is On Sale!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Hi {{customerName}},
          <br><br>
          Great news! An item from your wishlist is now on sale. Don't miss this opportunity to save!
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">On Sale Now</mj-text>
        <mj-table>
          <tr class="product-item">
            <td style="padding: 10px 15px 10px 0;">
              <table>
                <tr>
                  <td><img src="https://via.placeholder.com/80x80" width="80" height="80" /></td>
                  <td style="padding-left: 15px;">
                    {{productName}}<br>
                    <span style="text-decoration: line-through;">Original: ${'{{originalPrice}}'}</span><br>
                    <strong style="color: #e74c3c;">Now: ${'{{salePrice}}'}</strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          This offer is for a limited time only. Grab your favorite item before the sale ends!
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{productUrl}}">Shop Now</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-size="16px" font-weight="bold">
          Why buy now?
        </mj-text>
        <mj-text>
          • Limited time offer<br>
          • Significant savings<br>
          • Item from your personal wishlist
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

export default function WishlistSalePage() {
    return (
        <EmailTemplatePage
            moduleName="Product Interactions"
            templateName="Wishlist Item on Sale"
            mjmlContent={wishlistSaleMjml}
        />
    );
}