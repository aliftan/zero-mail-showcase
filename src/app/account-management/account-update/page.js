import EmailTemplatePage from '@/components/EmailTemplatePage';

const accountUpdateMjml = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#f4f4f4">
    <mj-section padding-top="20px" padding-bottom="20px">
      <mj-column width="100%">
        <mj-image src="https://via.placeholder.com/150x50" alt="Logo" align="center" width="150px" />
      </mj-column>
    </mj-section>
    
    <mj-section background-color="#ffffff" padding="20px" border-radius="8px">
      <mj-column>
        <mj-text font-size="24px" color="#333333" align="center">Account Update Confirmation</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          Your account details have been successfully updated. Here's a summary of the changes:
          <br><br>
          {{changedFields}}
          <br><br>
          If you did not make these changes, please contact our support team immediately.
        </mj-text>
        <mj-button background-color="#F45E43" color="#ffffff" href="{{accountUrl}}">View Account</mj-button>
      </mj-column>
    </mj-section>
    
    <mj-section padding-top="20px" padding-bottom="20px">
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
          Need help? Contact our support team at <a href="mailto:support@yourcompany.com" style="color: #F45E43;">support@yourcompany.com</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function AccountUpdatePage() {
    return (
        <EmailTemplatePage
            moduleName="Account Management"
            templateName="Account Update Confirmation"
            mjmlContent={accountUpdateMjml}
        />
    );
}