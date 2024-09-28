import EmailTemplatePage from '@/components/EmailTemplatePage';

const otpVerificationMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Verify Your Email</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear User,
          <br><br>
          Thank you for signing up! To complete your registration, please use the following One-Time Password (OTP) to verify your email address:
        </mj-text>
        <mj-text font-size="32px" color="#F45E43" align="center" font-weight="bold">
          {{otpCode}}
        </mj-text>
        <mj-text font-size="14px" color="#888888">
          This OTP will expire in 10 minutes. If you didn't request this verification, please ignore this email.
        </mj-text>
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

export default function OtpVerificationPage() {
    return (
        <EmailTemplatePage
            moduleName="Account Management"
            templateName="Email OTP Signup Verification"
            mjmlContent={otpVerificationMjml}
        />
    );
}