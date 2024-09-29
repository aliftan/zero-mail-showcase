import EmailTemplatePage from '@/components/EmailTemplatePage';

const appointmentRescheduleRequestedMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Appointment Reschedule Request Received</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          We have received your request to reschedule your appointment. Here are the current details of your appointment:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Current Date:</strong> {{currentAppointmentDate}}</mj-text>
            <mj-text font-size="16px"><strong>Current Time:</strong> {{currentAppointmentTime}}</mj-text>
            <mj-text font-size="16px"><strong>Service:</strong> {{serviceName}}</mj-text>
            <mj-text font-size="16px"><strong>Location:</strong> {{location}}</mj-text>
            <mj-text font-size="16px"><strong>Provider:</strong> {{providerName}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          We're working on finding a new time slot for you. We'll get back to you shortly with available options.
          <br><br>
          If you have any specific date or time preferences, please let us know by replying to this email or by using the button below to contact us.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{contactUsUrl}}">Contact Us</mj-button>
        <mj-text font-size="16px" color="#555555">
          Thank you for your patience. We'll do our best to accommodate your request as soon as possible.
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

export default function AppointmentRescheduleRequestedPage() {
    return (
        <EmailTemplatePage
            moduleName="Appointment Bookings"
            templateName="Appointment Reschedule Requested"
            mjmlContent={appointmentRescheduleRequestedMjml}
        />
    );
}