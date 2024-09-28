import EmailTemplatePage from '@/components/EmailTemplatePage';

const feedbackSurveyMjml = `
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
    
    <mj-section background-color="#ffffff" padding-top="40px" padding-bottom="40px">
      <mj-column>
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">We Value Your Feedback!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Hi {'{{customerName}}'},
          <br><br>
          Your opinion matters to us. We'd love to hear about your experience with our products and services.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Quick Survey</mj-text>
        <mj-text>
          We've prepared a short survey that will only take a few minutes of your time. Your feedback will help us improve and serve you better.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{surveyUrl}}'}">Take the Survey</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="18px" color="#1a2b49">Why Your Feedback Matters:</mj-text>
        <mj-text>
          • Helps us improve our products and services<br>
          • Allows us to better understand your needs<br>
          • Contributes to the development of new features
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-size="16px">
          As a token of our appreciation, you'll receive a {'{{discountAmount}}'} discount code upon completion of the survey.
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
          You're receiving this email because you're a valued customer.<br>
          Want to change how you receive these emails?<br>
          You can <a href="{'{{updatePreferencesUrl}}'}" style="color: #1a2b49;">update your preferences</a> or <a href="{'{{unsubscribeUrl}}'}" style="color: #1a2b49;">unsubscribe</a> at any time.
        </mj-text>
        <mj-text align="center" font-size="12px">
          © 2024 Your E-commerce Company. All rights reserved.
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function FeedbackSurveyPage() {
    return (
        <EmailTemplatePage
            moduleName="Customer Engagement"
            templateName="Customer Feedback Survey"
            mjmlContent={feedbackSurveyMjml}
        />
    );
}