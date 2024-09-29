import EmailTemplatePage from '@/components/EmailTemplatePage';

const eventCanceledMjml = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
      <mj-text font-size="14px" color="#555555" line-height="20px" />
      <mj-section background-color="#ffffff" padding="20px" />
    </mj-attributes>
    <mj-style>
      .event-details { border: 1px solid #e0e0e0; border-radius: 4px; overflow: hidden; }
    </mj-style>
  </mj-head>
  <mj-body background-color="#f4f4f4">
    <mj-section padding-bottom="0" background-color="#1a2b49">
      <mj-column width="100%">
        <mj-image src="https://via.placeholder.com/200x50/1a2b49/ffffff?text=Event+Logo" alt="Event Logo" align="center" width="200px" />
      </mj-column>
    </mj-section>
    
    <mj-section background-color="#ffffff" padding-top="40px" padding-bottom="40px">
      <mj-column>
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Event Canceled</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          We regret to inform you that {{eventName}} has been canceled. We apologize for any inconvenience this may cause.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column width="100%">
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Event Details</mj-text>
        <mj-wrapper css-class="event-details" padding="0">
          <mj-section padding="0">
            <mj-column width="40%" padding="30px">
              <mj-image src="https://via.placeholder.com/300x300?text=Event+Image" alt="Event Image" width="100%" height="auto" />
            </mj-column>
            <mj-column width="60%" padding="20px">
              <mj-text font-size="22px" font-weight="bold" color="#1a2b49">{{eventName}}</mj-text>
              <mj-text>
                <strong>Date:</strong> {{eventDate}}
                <br>
                <strong>Time:</strong> {{eventTime}}
                <br>
                <strong>Venue:</strong> {{venueName}}
                <br>
                <strong>Address:</strong> {{venueAddress}}
              </mj-text>
            </mj-column>
          </mj-section>
        </mj-wrapper>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Refund Information</mj-text>
        <mj-text>
          • All tickets purchased for this event will be fully refunded.
          <br>
          • Refunds will be processed automatically to your original payment method.
          <br>
          • Please allow 5-10 business days for the refund to appear on your statement.
          <br>
          • If you purchased tickets through a third-party vendor, please contact them directly for refund information.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          We sincerely apologize for any disappointment or inconvenience caused by this cancellation. If you have any questions about the refund process or need further assistance, please don't hesitate to contact our support team.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{supportUrl}}">Contact Support</mj-button>
        <mj-button background-color="#4CAF50" color="#ffffff" href="{{upcomingEventsUrl}}">View Upcoming Events</mj-button>
      </mj-column>
    </mj-section>
    
    <mj-section padding-top="20px" background-color="#f4f4f4">
      <mj-column>
        <mj-social font-size="15px" icon-size="30px" mode="horizontal">
          <mj-social-element name="facebook" href="https://facebook.com/yourevent" />
          <mj-social-element name="twitter" href="https://twitter.com/yourevent" />
          <mj-social-element name="instagram" href="https://instagram.com/yourevent" />
        </mj-social>
        <mj-text align="center" font-size="12px">
          123 Event Plaza, Music City, 12345<br>
          © 2024 Your Event Company. All rights reserved.
        </mj-text>
        <mj-text align="center" font-size="12px">
          Need help? Contact our support team at <a href="mailto:support@yourevent.com" style="color: #1a2b49;">support@yourevent.com</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function EventCanceledPage() {
  return (
    <EmailTemplatePage
      moduleName="Event Tickets"
      templateName="Event Canceled"
      mjmlContent={eventCanceledMjml}
    />
  );
}