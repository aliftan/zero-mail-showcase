import EmailTemplatePage from '@/components/EmailTemplatePage';

const ticketsPurchasedMjml = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
      <mj-text font-size="14px" color="#555555" line-height="20px" />
      <mj-section background-color="#ffffff" padding="20px" />
    </mj-attributes>
    <mj-style>
      .ticket-item td { vertical-align: top; }
      .ticket { border: 2px solid #1a2b49; border-radius: 8px; overflow: hidden; }
      .ticket-header { background-color: #1a2b49; color: #ffffff; padding: 10px; text-align: center; }
      .ticket-body { padding: 15px; }
      .ticket-footer { background-color: #f0f0f0; padding: 10px; text-align: center; }
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Your Tickets are Confirmed!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{customerName}},
          <br><br>
          Thank you for your purchase. Your tickets for {{eventName}} have been confirmed. Here are the details:
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
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Your Tickets</mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column width="100%">
        <mj-table css-class="ticket">
          <tr>
            <td class="ticket-header" colspan="2">
              <strong style="font-size: 18px;">VIP Pass</strong>
            </td>
          </tr>
          <tr>
            <td class="ticket-body" style="width: 70%;">
              <strong>Ticket Holder:</strong> {{customerName}}<br>
              <strong>Event:</strong> {{eventName}}<br>
              <strong>Date:</strong> {{eventDate}}<br>
              <strong>Time:</strong> {{eventTime}}<br>
              <strong>Seat:</strong> General Admission
            </td>
            <td class="ticket-body" style="width: 30%; text-align: center;">
              <img src="https://via.placeholder.com/100x100?text=QR+Code" alt="QR Code" style="width: 100px; height: 100px;" />
            </td>
          </tr>
          <tr>
            <td class="ticket-footer" colspan="2">
              <strong>Ticket #:</strong> VIP-001-2345-6789
            </td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Order Summary</mj-text>
        <mj-table>
          <tr style="border-bottom:1px solid #ecedee;text-align:left;">
            <th style="padding: 0 15px 0 0;">Ticket Type</th>
            <th style="padding: 0 15px;">Quantity</th>
            <th style="padding: 0 0 0 15px;">Price</th>
          </tr>
          <tr class="ticket-item">
            <td style="padding: 10px 15px 10px 0;">
              VIP Pass
              <br>
              <span style="font-size: 12px; color: #888;">Includes early entry and meet & greet</span>
            </td>
            <td style="padding: 0 15px;">2</td>
            <td style="padding: 0 0 0 15px;">$199.99 each</td>
          </tr>
          <tr class="ticket-item">
            <td style="padding: 10px 15px 10px 0;">
              General Admission
              <br>
              <span style="font-size: 12px; color: #888;">Standard entry</span>
            </td>
            <td style="padding: 0 15px;">3</td>
            <td style="padding: 0 0 0 15px;">$79.99 each</td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Order Total</mj-text>
        <mj-table>
          <tr>
            <td style="padding: 0 15px 0 0;">Subtotal:</td>
            <td style="padding: 0 0 0 15px;">$639.95</td>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">Service Fee:</td>
            <td style="padding: 0 0 0 15px;">$25.00</td>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">Tax:</td>
            <td style="padding: 0 0 0 15px;">$53.20</td>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">Discount:</td>
            <td style="padding: 0 0 0 15px;">-$50.00</td>
          </tr>
          <tr style="border-top:1px solid #ecedee;">
            <td style="padding: 5px 15px 0 0;"><strong>Total Paid:</strong></td>
            <td style="padding: 5px 0 0 15px;"><strong>$668.15</strong></td>
          </tr>
        </mj-table>
        <mj-text>
          <strong>Promo Code Used:</strong> SUMMERFEST (10% off)
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          Your tickets are attached to this email. You can also access them through our mobile app or website.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewTicketsUrl}}">View My Tickets</mj-button>
        <mj-text font-size="12px">
          Please note: Each ticket has a unique QR code. Do not share your tickets with others to avoid unauthorized access.
        </mj-text>
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

export default function TicketsPurchasedPage() {
    return (
        <EmailTemplatePage
            moduleName="Event Tickets"
            templateName="Tickets Purchased"
            mjmlContent={ticketsPurchasedMjml}
        />
    );
}