import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

function Editor() {
  const [code, setCode] = React.useState('# Write code here');

  return (
    <CodeMirror
        value={code}
        height="608px"
        extensions={[python()]}
        onChange={(value) => setCode(value)}
        theme="dark"
        />
  );
}

export default Editor;