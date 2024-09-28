import EmailTemplatePage from '@/components/EmailTemplatePage';

const rewardRedeemedMjml = `
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Reward Redeemed Successfully!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Hi {'{{customerName}}'},
          <br><br>
          Great news! Your reward has been successfully redeemed. Here are the details of your redemption:
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49" align="center">Redemption Details</mj-text>
        <mj-text font-size="16px">
          <strong>Reward:</strong> {'{{rewardName}}'}<br>
          <strong>Points Used:</strong> {'{{pointsUsed}}'}<br>
          <strong>Date:</strong> {'{{redemptionDate}}'}<br>
          <strong>Redemption Code:</strong> {'{{redemptionCode}}'}
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          Your reward is now ready to use. If it's a discount code, you can apply it at checkout for your next purchase.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{shopNowUrl}}'}">Shop Now</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-size="16px" font-weight="bold">
          Remaining Points Balance: {'{{remainingPoints}}'}
        </mj-text>
        <mj-text>
          Keep earning points on your purchases to unlock more exciting rewards!
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

export default function RewardRedeemedPage() {
    return (
        <EmailTemplatePage
            moduleName="Promotions and Loyalty"
            templateName="Reward Redemption Confirmation"
            mjmlContent={rewardRedeemedMjml}
        />
    );
}