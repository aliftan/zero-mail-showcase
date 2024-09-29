import EmailTemplatePage from '@/components/EmailTemplatePage';

const membershipRewardsReceivedMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">You've Earned Membership Rewards!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          Great news! As a valued member, you've just received new rewards. Here's what you've earned:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Membership Level:</strong> {{membershipLevel}}</mj-text>
            <mj-text font-size="16px"><strong>Date Earned:</strong> {{dateEarned}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          Here's a breakdown of your rewards:
        </mj-text>
        
        <!-- E-Wallet Balance -->
        {{#if eWalletBalance}}
        <mj-section background-color="#f9f9f9" border-radius="8px">
          <mj-column>
            <mj-text font-size="18px" font-weight="bold" color="#333333">E-Wallet Balance</mj-text>
            <mj-text font-size="16px">{{eWalletBalance}} has been added to your e-wallet</mj-text>
          </mj-column>
        </mj-section>
        {{/if}}
        
        <!-- Vouchers -->
        {{#if vouchers}}
        <mj-section background-color="#f9f9f9" border-radius="8px">
          <mj-column>
            <mj-text font-size="18px" font-weight="bold" color="#333333">Vouchers</mj-text>
            {{#each vouchers}}
            <mj-text font-size="16px">• {{this.description}} (Code: {{this.code}})</mj-text>
            {{/each}}
          </mj-column>
        </mj-section>
        {{/if}}
        
        <!-- Other Rewards -->
        {{#if otherRewards}}
        <mj-section background-color="#f9f9f9" border-radius="8px">
          <mj-column>
            <mj-text font-size="18px" font-weight="bold" color="#333333">Other Rewards</mj-text>
            {{#each otherRewards}}
            <mj-text font-size="16px">• {{this}}</mj-text>
            {{/each}}
          </mj-column>
        </mj-section>
        {{/if}}
        
        <mj-text font-size="16px" color="#555555">
          <br>
          These rewards are now available in your account. Don't forget to use them before they expire!
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewRewardsUrl}}">View My Rewards</mj-button>
        <mj-text font-size="16px" color="#555555">
          Thank you for your continued loyalty. Keep enjoying your membership benefits, and you'll earn even more rewards!
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

export default function MembershipRewardsReceivedPage() {
    return (
        <EmailTemplatePage
            moduleName="Memberships"
            templateName="Membership Rewards Received"
            mjmlContent={membershipRewardsReceivedMjml}
        />
    );
}