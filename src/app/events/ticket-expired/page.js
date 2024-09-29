import EmailTemplatePage from '@/components/EmailTemplatePage';

const ticketExpiredMjml = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
      <mj-text font-size="14px" color="#555555" line-height="20px" />
      <mj-section background-color="#ffffff" padding="20px" />
    </mj-attributes>
    <mj-style>
      .ticket {
        border: 2px solid #1a2b49;
        border-radius: 8px;
        overflow: hidden;
        opacity: 0.7;
      }
      .ticket-header {
        background-color: #1a2b49;
        color: #ffffff;
        padding: 10px;
        text-align: center;
      }
      .ticket-body {
        padding: 15px;
      }
      .ticket-footer {
        background-color: #f0f0f0;
        padding: 10px;
        text-align: center;
      }
      .expired-stamp {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-15deg);
        font-size: 24px;
        color: #e74c3c;
        border: 5px solid #e74c3c;
        padding: 10px;
        border-radius: 10px;
        opacity: 0.7;
      }
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Your Ticket Has Expired</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          We regret to inform you that your ticket for {{eventName}} has expired.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column width="100%">
        <mj-table css-class="ticket">
          <tr>
            <td class="ticket-header" colspan="2">
              <strong style="font-size: 18px;">{{ticketType}}</strong>
            </td>
          </tr>
          <tr>
            <td class="ticket-body" style="width: 70%; position: relative;">
              <div class="expired-stamp">EXPIRED</div>
              <strong>Ticket Holder:</strong> {{customerName}}<br>
              <strong>Event:</strong> {{eventName}}<br>
              <strong>Date:</strong> {{eventDate}}<br>
              <strong>Time:</strong> {{eventTime}}<br>
              <strong>Venue:</strong> {{venueName}}<br>
              <strong>Ticket Number:</strong> {{ticketNumber}}<br>
              <strong>Expiration Date:</strong> {{expirationDate}}
            </td>
            <td class="ticket-body" style="width: 30%; text-align: center;">
              <img src="https://via.placeholder.com/100x100?text=QR+Code" alt="QR Code" style="width: 100px; height: 100px; opacity: 0.3;" />
            </td>
          </tr>
          <tr>
            <td class="ticket-footer" colspan="2">
              This ticket has expired and is no longer valid for entry.
            </td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">What This Means</mj-text>
        <mj-text>
          • Your ticket is no longer valid for entry to the event.
          <br>
          • The ticket cannot be reactivated or transferred.
          <br>
          • If you still wish to attend the event, you may need to purchase a new ticket, subject to availability.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          If you believe this is an error or have any questions about your expired ticket, please contact our support team immediately.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{supportUrl}}">Contact Support</mj-button>
        <mj-button background-color="#4CAF50" color="#ffffff" href="{{buyTicketsUrl}}">Buy New Tickets</mj-button>
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

export default function TicketExpiredPage() {
    return (
        <EmailTemplatePage
            moduleName="Event Tickets"
            templateName="Ticket Expired"
            mjmlContent={ticketExpiredMjml}
        />
    );
}