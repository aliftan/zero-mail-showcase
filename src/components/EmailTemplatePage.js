'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import { Highlight, themes } from 'prism-react-renderer';
import { ArrowLeftIcon, CodeBracketIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';

const MjmlRenderer = dynamic(() => import('@/components/MjmlRenderer'), { ssr: false });

export default function EmailTemplatePage({ moduleName, templateName, mjmlContent }) {
    const [viewMode, setViewMode] = useState('mobile');
    const [showCode, setShowCode] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 640);
            setViewMode(window.innerWidth < 640 ? 'mobile' : 'web');
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(mjmlContent).then(() => {
            alert('Code copied to clipboard!');
        });
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 font-sans bg-gray-50">
            <Header />

            <Link href="/" className="text-blue-500 hover:text-blue-600 transition-colors mb-4 sm:mb-8 inline-flex items-center text-sm sm:text-base">
                <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Back to Templates
            </Link>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-4 sm:space-y-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{moduleName} / {templateName}</h2>
                    <div className="flex flex-wrap gap-1 sm:space-x-2">
                        <button
                            onClick={() => setShowCode(true)}
                            className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300 flex items-center text-xs sm:text-sm font-medium"
                        >
                            <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                            View Code
                        </button>
                        {!isMobile && (
                            <>
                                <button
                                    onClick={() => setViewMode('web')}
                                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${viewMode === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    Web
                                </button>
                                <button
                                    onClick={() => setViewMode('mobile')}
                                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${viewMode === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    Mobile
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className={`border rounded-xl overflow-hidden ${viewMode === 'mobile' ? 'max-w-[320px] mx-auto' : 'w-full'}`}>
                    <MjmlRenderer mjmlContent={mjmlContent} />
                </div>
            </div>

            {showCode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-xl">
                        <div className="p-4 sm:p-6 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">MJML Template Code</h3>
                            <div className="flex space-x-2 sm:space-x-3">
                                <button
                                    onClick={copyToClipboard}
                                    className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm font-medium flex items-center"
                                >
                                    <DocumentDuplicateIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                                    Copy Code
                                </button>
                                <button
                                    onClick={() => setShowCode(false)}
                                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 text-xs sm:text-sm font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 max-h-[calc(80vh-100px)] overflow-auto bg-gray-900">
                            <Highlight theme={themes.vsDark} code={mjmlContent} language="markup">
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className="rounded-lg text-xs sm:text-sm" style={{ ...style, background: 'transparent' }}>
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