import EmailTemplatePage from '@/components/EmailTemplatePage';

const supportTicketOpenedMjml = `
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Support Ticket Received</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {'{{customerName}}'},
          <br><br>
          We've received your support request and a ticket has been created. Our team will review your issue and get back to you as soon as possible.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Ticket Details</mj-text>
        <mj-text>
          <strong>Ticket Number:</strong> {'{{ticketNumber}}'}<br>
          <strong>Subject:</strong> {'{{ticketSubject}}'}<br>
          <strong>Priority:</strong> {'{{ticketPriority}}'}<br>
          <strong>Date Opened:</strong> {'{{dateOpened}}'}<br>
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="18px" color="#1a2b49">Next Steps:</mj-text>
        <mj-text>
          1. Our support team will review your request.<br>
          2. We may contact you for additional information if needed.<br>
          3. We'll work on resolving your issue as quickly as possible.<br>
          4. You'll receive updates on the progress of your ticket.
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text>
          You can check the status of your ticket at any time by clicking the button below:
        </mj-text>
        <mj-button background-color="#1a2b49" color="#ffffff" href="{'{{ticketStatusUrl}}'}">Check Ticket Status</mj-button>
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

export default function SupportTicketOpenedPage() {
    return (
        <EmailTemplatePage
            moduleName="Customer Support"
            templateName="Support Ticket Opened"
            mjmlContent={supportTicketOpenedMjml}
        />
    );
}