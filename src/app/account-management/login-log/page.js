import EmailTemplatePage from '@/components/EmailTemplatePage';

const loginLogMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">New Login Detected</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          We detected a new login to your account. Here are the details:
          <br><br>
          Date and Time: {{loginDateTime}}
          <br>
          Location: {{loginLocation}}
          <br>
          Device: {{deviceInfo}}
          <br><br>
          If this was you, no further action is needed. If you don't recognize this activity, please secure your account immediately.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{securitySettingsUrl}}">Review Account Security</mj-button>
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

export default function LoginLogPage() {
    return (
        <EmailTemplatePage
            moduleName="Account Management"
            templateName="Login Log"
            mjmlContent={loginLogMjml}
        />
    );
}