import EmailTemplatePage from '@/components/EmailTemplatePage';

const membershipExpiryReminderMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Your Membership is Expiring Soon</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          This is a friendly reminder that your membership is set to expire soon. We don't want you to miss out on your exclusive benefits!
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Current Membership Level:</strong> {{currentMembershipLevel}}</mj-text>
            <mj-text font-size="16px"><strong>Expiration Date:</strong> {{expirationDate}}</mj-text>
            <mj-text font-size="16px"><strong>Days Until Expiration:</strong> {{daysUntilExpiration}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          Don't let your membership lapse and lose these great benefits:
        </mj-text>
        <mj-list>
          {{#each membershipBenefits}}
            <mj-text font-size="14px">• {{this}}</mj-text>
          {{/each}}
        </mj-list>
        <mj-text font-size="16px" color="#555555">
          To ensure uninterrupted access to your benefits, please renew your membership before the expiration date.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{renewMembershipUrl}}">Renew Now</mj-button>
        <mj-text font-size="16px" color="#555555">
          If you have any questions about your membership or the renewal process, our support team is here to help.
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

export default function MembershipExpiryReminderPage() {
    return (
        <EmailTemplatePage
            moduleName="Memberships"
            templateName="Membership Expiry Reminder"
            mjmlContent={membershipExpiryReminderMjml}
        />
    );
}