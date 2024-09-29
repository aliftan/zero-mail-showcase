import EmailTemplatePage from '@/components/EmailTemplatePage';

const voucherCodeExpiredMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Your {{voucherType}} Has Expired</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          We wanted to let you know that your {{voucherType}} has expired.
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="20px" font-weight="bold" align="center">{{voucherCode}}</mj-text>
            <mj-text font-size="16px" align="center">{{voucherDescription}}</mj-text>
            <mj-text font-size="16px" color="#e74c3c" align="center">Expired on: {{expiryDate}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          While this particular offer has ended, we don't want you to miss out on savings. Check out our current promotions and deals by clicking the button below.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{currentPromotionsUrl}}">View Current Promotions</mj-button>
        <mj-text font-size="16px" color="#555555">
          <br>
          Thank you for being a valued customer. We look forward to serving you again soon!
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

export default function VoucherCodeExpiredPage() {
    return (
        <EmailTemplatePage
            moduleName="Vouchers and Promo Codes"
            templateName="Voucher/Promo Code Expired"
            mjmlContent={voucherCodeExpiredMjml}
        />
    );
}