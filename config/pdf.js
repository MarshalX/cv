module.exports = {
    pdf_options: {
        format: 'A4',
        // t r b l
        margin: '10mm 20mm 10mm 20mm',
        scale: 0.95,
    },
    stylesheet: [
        'css/bootstrap.min.css',
        'css/github-markdown.min.css'
    ],
    body_class: 'markdown-body',
    css: `
        .page-break { page-break-after: always; }
        .markdown-body { font-size: 11px; }
        .markdown-body pre > code { white-space: pre-wrap; }
        .indent { text-indent: 25px; }
        .col-skills { min-width: 110px; }
    `,
};
