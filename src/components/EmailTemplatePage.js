'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import { Highlight, themes } from 'prism-react-renderer';
import { ArrowLeftIcon, CodeBracketIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';

const MjmlRenderer = dynamic(() => import('@/components/MjmlRenderer'), { ssr: false });

export default function EmailTemplatePage({ moduleName, templateName, mjmlContent }) {
    const [viewMode, setViewMode] = useState('web');
    const [showCode, setShowCode] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(mjmlContent).then(() => {
            alert('Code copied to clipboard!');
        });
    };

    return (
        <div className="min-h-screen p-20 font-sans bg-gray-50">
            <Header />

            <Link href="/" className="text-blue-500 hover:text-blue-600 transition-colors mb-8 inline-flex items-center">
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Templates
            </Link>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">{moduleName} / {templateName}</h2>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => setShowCode(true)}
                            className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300 flex items-center text-sm font-medium"
                        >
                            <CodeBracketIcon className="h-5 w-5 mr-2" />
                            View Code
                        </button>
                        <button
                            onClick={() => setViewMode('web')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${viewMode === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            Web
                        </button>
                        <button
                            onClick={() => setViewMode('mobile')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${viewMode === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            Mobile
                        </button>
                    </div>
                </div>

                <div className={`border rounded-xl overflow-hidden ${viewMode === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'}`}>
                    <MjmlRenderer mjmlContent={mjmlContent} />
                </div>
            </div>

            {showCode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-xl">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-gray-800">MJML Template Code</h3>
                            <div className="flex space-x-3">
                                <button
                                    onClick={copyToClipboard}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm font-medium flex items-center"
                                >
                                    <DocumentDuplicateIcon className="h-5 w-5 mr-2" />
                                    Copy Code
                                </button>
                                <button
                                    onClick={() => setShowCode(false)}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 text-sm font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                        <div className="p-6 max-h-[calc(80vh-100px)] overflow-auto bg-gray-900">
                            <Highlight theme={themes.vsDark} code={mjmlContent} language="markup">
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className="rounded-lg text-sm" style={{ ...style, background: 'transparent' }}>
                                        {tokens.map((line, i) => (
                                            <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                                                <span className="table-cell text-right pr-4 select-none opacity-50">{i + 1}</span>
                                                <span className="table-cell">
                                                    {line.map((token, key) => (
                                                        <span key={key} {...getTokenProps({ token, key })} />
                                                    ))}
                                                </span>
                                            </div>
                                        ))}
                                    </pre>
                                )}
                            </Highlight>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}