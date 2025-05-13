import CodeMirror from '@uiw/react-codemirror';
import { consoleDark, consoleDarkInit } from '@uiw/codemirror-theme-console/dark';
import { consoleLight, consoleLightInit } from '@uiw/codemirror-theme-console/light';

function Console() {
    return (
        <CodeMirror
            value={"Hello, world!"}
            height="200px"
            theme={consoleLight}
            // onChange={(value, viewUpdate) => {
            //     console.log('value:', value);
            // }}
        />
    );
}

export default Console;