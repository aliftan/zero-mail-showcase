import EmailTemplatePage from '@/components/EmailTemplatePage';

const appointmentRescheduledMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Your Appointment Has Been Rescheduled</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          We're writing to inform you that your appointment has been rescheduled. Here are the new details:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>New Date:</strong> {{newAppointmentDate}}</mj-text>
            <mj-text font-size="16px"><strong>New Time:</strong> {{newAppointmentTime}}</mj-text>
            <mj-text font-size="16px"><strong>Service:</strong> {{serviceName}}</mj-text>
            <mj-text font-size="16px"><strong>Location:</strong> {{location}}</mj-text>
            <mj-text font-size="16px"><strong>Provider:</strong> {{providerName}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          Your previous appointment was scheduled for {{oldAppointmentDate}} at {{oldAppointmentTime}}.
          <br><br>
          If this new schedule doesn't work for you, please use the button below to request another change or to cancel your appointment.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{manageAppointmentUrl}}">Manage Appointment</mj-button>
        <mj-text font-size="16px" color="#555555">
          We apologize for any inconvenience this may cause and appreciate your understanding.
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

export default function AppointmentRescheduledPage() {
    return (
        <EmailTemplatePage
            moduleName="Appointment Bookings"
            templateName="Appointment Rescheduled"
            mjmlContent={appointmentRescheduledMjml}
        />
    );
}