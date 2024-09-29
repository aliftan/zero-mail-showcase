import EmailTemplatePage from '@/components/EmailTemplatePage';

const membershipLevelUpMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Congratulations on Your Membership Level Up!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          We're thrilled to announce that you've reached a new membership level! Your loyalty and engagement have been rewarded.
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>New Membership Level:</strong> {{newMembershipLevel}}</mj-text>
            <mj-text font-size="16px"><strong>Previous Level:</strong> {{previousMembershipLevel}}</mj-text>
            <mj-text font-size="16px"><strong>Effective Date:</strong> {{effectiveDate}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          With your new membership level, you now have access to these additional perks:
        </mj-text>
        <mj-list>
          {{#each newPerks}}
            <mj-text font-size="14px">• {{this}}</mj-text>
          {{/each}}
        </mj-list>
        <mj-text font-size="16px" color="#555555">
          We appreciate your continued support and hope you enjoy your enhanced membership experience. Keep up the great work, and who knows? You might reach an even higher level soon!
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{membershipDetailsUrl}}">Explore Your New Benefits</mj-button>
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

export default function MembershipLevelUpPage() {
    return (
        <EmailTemplatePage
            moduleName="Memberships"
            templateName="Membership Level Up"
            mjmlContent={membershipLevelUpMjml}
        />
    );
}