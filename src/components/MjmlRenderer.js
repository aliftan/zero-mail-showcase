'use client';

import { useState, useEffect } from 'react';

const MjmlRenderer = ({ mjmlContent }) => {
    const [html, setHtml] = useState('');

    useEffect(() => {
        const renderMjml = async () => {
            const mjml2html = (await import('mjml-browser')).default;
            const { html } = mjml2html(mjmlContent);
            setHtml(html);
        };

        renderMjml();
    }, [mjmlContent]);

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MjmlRenderer;