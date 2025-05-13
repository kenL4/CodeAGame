import { Application } from '@pixi/react';
import './App.css'
import PixiApp from './pixi_app.jsx'
import Editor from './text_editor.jsx';

function App() {
  return (
    <>
      <h1 >Code Something</h1>
      <div className="content" style={{display: "flex", width:"90%", height:"60%"}}>
        <div style={{flex:"1"}}>
          <Editor/>
        </div>
        <div style={{flex:"1", outline:"#111111 solid 1px"}}>
          <Application backgroundColor={0xeeeeee}>
            <PixiApp />
          </Application>
        </div>
      </div>
    </>
  )
}

export default App;
