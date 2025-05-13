import { Application } from '@pixi/react';
import './App.css'
import PixiApp from './pixi_app.jsx'
import Editor from './text_editor.jsx';
import Console from './console.jsx';

function App() {
  return (
    <>
      <h1 >Code Something Sandbox</h1>
      <div className="content" style={{display:"flex", width:"80vw", paddingLeft:"10vw", paddingRight:"10vw"}}>
        <div style={{flex:"1", height:"100%", }}>
          <div className="code-editor">
            <Editor/>
          </div>
        </div>
        <div style={{flex:"1", height:"600px", outline:"#111111 solid 1px", display:"flex", flexDirection:"column"}}>
          <div className="pixi_frame" style={{flex:"1"}}>
            <Application width={800} height={400} backgroundColor={0xeeeeee}>
              <PixiApp />
            </Application>
          </div>
          <div style={{flex:"1", outline:"#111111 solid 1px"}}>
            <div className="console">
              <Console/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
