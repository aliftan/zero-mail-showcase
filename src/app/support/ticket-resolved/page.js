import EmailTemplatePage from '@/components/EmailTemplatePage';

const supportTicketResolvedMjml = `
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Support Ticket Resolved</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {'{{customerName}}'},
          <br><br>
          We're pleased to inform you that your support ticket has been resolved. We hope the solution provided meets your expectations.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Ticket Details</mj-text>
        <mj-text>
          <strong>Ticket Number:</strong> {'{{ticketNumber}}'}<br>
          <strong>Subject:</strong> {'{{ticketSubject}}'}<br>
          <strong>Status:</strong> Resolved<br>
          <strong>Resolution Date:</strong> {'{{resolutionDate}}'}<br>
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="18px" color="#1a2b49">Resolution Summary:</mj-text>
        <mj-text>
          {'{{resolutionSummary}}'}
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          If you're satisfied with the resolution, no further action is needed. However, if you feel that your issue hasn't been fully resolved or if you have any questions, please don't hesitate to reopen the ticket by clicking the button below:
        </mj-text>
        <mj-button background-color="#1a2b49" color="#ffffff" href="{'{{reopenTicketUrl}}'}">Reopen Ticket</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="18px" color="#1a2b49">We Value Your Feedback</mj-text>
        <mj-text>
          Your opinion matters to us. Please take a moment to rate your support experience:
        </mj-text>
        <mj-button background-color="#4CAF50" color="#ffffff" href="{'{{feedbackUrl}}'}">Rate Your Experience</mj-button>
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
          123 E-commerce St, Digital City, 12345<br>
          © 2024 Your E-commerce Company. All rights reserved.
        </mj-text>
        <mj-text align="center" font-size="12px">
          Need help? Contact our support team at <a href="mailto:support@yourcompany.com" style="color: #1a2b49;">support@yourcompany.com</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function SupportTicketResolvedPage() {
    return (
        <EmailTemplatePage
            moduleName="Customer Support"
            templateName="Support Ticket Resolved"
            mjmlContent={supportTicketResolvedMjml}
        />
    );
}