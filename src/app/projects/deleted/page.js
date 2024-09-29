import EmailTemplatePage from '@/components/EmailTemplatePage';

const projectDeletedMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Project Has Been Deleted</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          We're writing to inform you that the project "{{projectName}}" has been permanently deleted from our system. Here are the details:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Project Name:</strong> {{projectName}}</mj-text>
            <mj-text font-size="16px"><strong>Deleted By:</strong> {{deletedBy}}</mj-text>
            <mj-text font-size="16px"><strong>Date Deleted:</strong> {{deleteDate}}</mj-text>
            <mj-text font-size="16px"><strong>Reason:</strong> {{deleteReason}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          What this means:
          <br>
          • All project data, including tasks, comments, and files, have been permanently removed
          <br>
          • This action cannot be undone
          <br>
          • Any links or bookmarks to this project will no longer work
          <br><br>
          If you had any crucial information in this project that you need to retrieve, please contact your project manager or system administrator immediately. They may be able to help if a backup is available.
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{contactSupportUrl}}">Contact Support</mj-button>
        <mj-text font-size="16px" color="#555555">
          If you believe this project has been deleted in error, please reach out to your project manager or the system administrator as soon as possible.
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
          123 Project St, Digital City, 12345<br>
          © 2024 Your Project Management Company. All rights reserved.
        </mj-text>
        <mj-text align="center" font-size="12px" color="#555555">
          Need help? Contact our support team at <a href="mailto:support@yourcompany.com" style="color: #1a2b49;">support@yourcompany.com</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function ProjectDeletedPage() {
    return (
        <EmailTemplatePage
            moduleName="Projects"
            templateName="Project Deleted"
            mjmlContent={projectDeletedMjml}
        />
    );
}