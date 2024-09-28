'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';

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
  const [viewMode, setViewMode] = useState('web');

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <Header />

      <Link href="/" className="text-blue-500 hover:text-blue-600 transition-colors mb-8 inline-block">
        ← Back to Templates
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Account Management / Welcome Email</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('web')}
              className={`px-4 py-2 rounded ${viewMode === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Web
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-4 py-2 rounded ${viewMode === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Mobile
            </button>
          </div>
        </div>

        <div className={`border rounded-lg ${viewMode === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'}`}>
          <MjmlRenderer mjmlContent={welcomeMjml} />
        </div>
      </div>

      <footer className="mt-12 text-center text-gray-500">
        <p>Made with ❤️ by aliftan</p>
      </footer>
    </div>
  );
}