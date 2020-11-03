import React, { ReactElement } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
    
}

export default function codeExample({}: Props): ReactElement {
    const codeString = '(num) => num + 1';
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    )
}
