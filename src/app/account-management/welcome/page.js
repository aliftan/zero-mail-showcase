import dynamic from 'next/dynamic';

const MjmlRenderer = dynamic(() => import('@/components/MjmlRenderer'), { ssr: false });

const welcomeMjml = `
<mjml>
  <mj-body background-color="#f4f4f4">
    <mj-section background-color="#ffffff" padding-bottom="20px" padding-top="20px">
      <mj-column width="100%">
        <mj-image src="https://via.placeholder.com/150x50" alt="Logo" align="center" width="150px" />
        <mj-text font-size="24px" color="#626262" align="center">Welcome to Our Service!</mj-text>
        <mj-text font-size="16px" color="#626262">
          Dear {{name}},
          <br><br>
          Thank you for joining us. We're excited to have you on board!
          <br><br>
          If you have any questions, feel free to reply to this email.
        </mj-text>
        <mj-button background-color="#F45E43" href="{{loginUrl}}">Get Started</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function WelcomeEmailPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome Email Template</h1>
      <MjmlRenderer mjmlContent={welcomeMjml} />
    </div>
  );
}