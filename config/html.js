module.exports = {
    stylesheet: [
        'css/bootstrap.min.css',
        'css/github-markdown.min.css'
    ],
    body_class: 'container my-5 markdown-body',
    css: `
        .page-break { page-break-after: always; }
        .markdown-body { font-size: 14px; max-width: 900px; }
        .markdown-body pre > code { white-space: pre-wrap; }
        .indent { text-indent: 25px; }
        .col-skills { min-width: 110px; }
    `,
};
