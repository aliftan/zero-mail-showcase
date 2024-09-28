'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MjmlRenderer = ({ mjmlContent }) => {
    const [html, setHtml] = useState('');

    useEffect(() => {
        const renderMjml = async () => {
            const mjml2html = (await import('mjml')).default;
            const { html } = mjml2html(mjmlContent);
            setHtml(html);
        };

        renderMjml();
    }, [mjmlContent]);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <details>
                <summary>View MJML Source</summary>
                <pre>{mjmlContent}</pre>
            </details>
        </div>
    );
};

export default dynamic(() => Promise.resolve(MjmlRenderer), { ssr: false });