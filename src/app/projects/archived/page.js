import EmailTemplatePage from '@/components/EmailTemplatePage';

const projectArchivedMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Project Has Been Archived</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          We're writing to inform you that the project "{{projectName}}" has been archived. Here are the details:
        </mj-text>
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="16px"><strong>Project Name:</strong> {{projectName}}</mj-text>
            <mj-text font-size="16px"><strong>Archived By:</strong> {{archivedBy}}</mj-text>
            <mj-text font-size="16px"><strong>Date Archived:</strong> {{archiveDate}}</mj-text>
            <mj-text font-size="16px"><strong>Reason:</strong> {{archiveReason}}</mj-text>
          </mj-column>
        </mj-section>
        <mj-text font-size="16px" color="#555555">
          <br>
          What this means:
          <br>
          • The project is now in a read-only state
          <br>
          • No new tasks can be added or existing tasks modified
          <br>
          • All project data and history are preserved
          <br><br>
          You can still access the archived project for reference purposes. To view the archived project, please click the button below:
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewArchivedProjectUrl}}">View Archived Project</mj-button>
        <mj-text font-size="16px" color="#555555">
          If you believe this project has been archived in error or if you need to retrieve any information from it, please contact your project manager or the system administrator.
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

export default function ProjectArchivedPage() {
    return (
        <EmailTemplatePage
            moduleName="Projects"
            templateName="Project Archived"
            mjmlContent={projectArchivedMjml}
        />
    );
}