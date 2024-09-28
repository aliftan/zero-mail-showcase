import EmailTemplatePage from '@/components/EmailTemplatePage';

const birthdayVoucherMjml = `
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Happy Birthday, {'{{customerName}}'}!</mj-text>
        <mj-text font-size="16px" color="#555555">
          We hope you have a fantastic day! To celebrate your special day, we've got a little surprise for you.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49" align="center">Your Birthday Gift</mj-text>
        <mj-text font-size="18px" align="center">
          Enjoy {'{{discountAmount}}'} off your next purchase!
        </mj-text>
        <mj-text font-size="24px" color="#e74c3c" align="center" font-weight="bold">
          Use code: {'{{voucherCode}}'}
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          This special offer is valid for {'{{validityPeriod}}'} days. Don't miss out on this birthday treat!
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{shopNowUrl}}'}">Shop Now</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-size="16px" font-weight="bold">
          Terms and Conditions:
        </mj-text>
        <mj-text>
          • Valid for one-time use only<br>
          • Cannot be combined with other offers<br>
          • Expires on {'{{expiryDate}}'}
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

export default function BirthdayVoucherPage() {
    return (
        <EmailTemplatePage
            moduleName="Promotions and Loyalty"
            templateName="Birthday Voucher"
            mjmlContent={birthdayVoucherMjml}
        />
    );
}