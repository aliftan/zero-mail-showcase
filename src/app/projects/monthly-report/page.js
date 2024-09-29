import EmailTemplatePage from '@/components/EmailTemplatePage';

const monthlyTasksReportMjml = `
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
        <mj-text font-size="24px" color="#333333" align="center">Monthly Tasks Report</mj-text>
        <mj-text font-size="16px" color="#555555">
          Dear {{name}},
          <br><br>
          Here's your monthly tasks report for {{monthYear}}. This report provides an overview of task progress and status across all your projects.
        </mj-text>
        
        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="18px" font-weight="bold" color="#333333">Summary</mj-text>
            <mj-text font-size="16px"><strong>Total Tasks:</strong> {{totalTasks}}</mj-text>
            <mj-text font-size="16px"><strong>Completed Tasks:</strong> {{completedTasks}}</mj-text>
            <mj-text font-size="16px"><strong>In Progress:</strong> {{inProgressTasks}}</mj-text>
            <mj-text font-size="16px"><strong>Not Started:</strong> {{notStartedTasks}}</mj-text>
            <mj-text font-size="16px"><strong>Overdue Tasks:</strong> {{overdueTasks}}</mj-text>
          </mj-column>
        </mj-section>

        <mj-section background-color="#ffffff" padding-top="20px">
            <mj-column>
                <mj-text font-size="18px" font-weight="bold" color="#333333">Task Completion Rate</mj-text>
                <mj-image src="https://via.placeholder.com/400x200/e74c3c/ffffff?text=Task+Completion+Chart" alt="Task Completion Chart" width="400px" />
            </mj-column>
        </mj-section>

        <mj-section background-color="#f0f0f0" border-radius="8px">
          <mj-column>
            <mj-text font-size="18px" font-weight="bold" color="#333333">Top Projects</mj-text>
            {{#each topProjects}}
              <mj-text font-size="16px">• {{this.name}}: {{this.completedTasks}} tasks completed</mj-text>
            {{/each}}
          </mj-column>
        </mj-section>

        <mj-text font-size="16px" color="#555555" padding-top="20px">
          Notable achievements this month:
        </mj-text>
        <mj-list>
          {{#each achievements}}
            <mj-text font-size="14px">• {{this}}</mj-text>
          {{/each}}
        </mj-list>

        <mj-text font-size="16px" color="#555555" padding-top="20px">
          Areas for improvement:
        </mj-text>
        <mj-list>
          {{#each improvements}}
            <mj-text font-size="14px">• {{this}}</mj-text>
          {{/each}}
        </mj-list>

        <mj-button background-color="#e74c3c" color="#ffffff" href="{{viewDetailedReportUrl}}">View Detailed Report</mj-button>
        
        <mj-text font-size="16px" color="#555555">
          Keep up the great work! If you have any questions about this report or need assistance with your tasks, please don't hesitate to contact your project manager.
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

export default function MonthlyTasksReportPage() {
    return (
        <EmailTemplatePage
            moduleName="Projects"
            templateName="Monthly Tasks Report"
            mjmlContent={monthlyTasksReportMjml}
        />
    );
}