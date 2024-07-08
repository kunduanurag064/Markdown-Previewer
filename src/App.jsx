import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import './App.css';

function App() {

  const firstpreviwew = `<h1>created by Anurag Kundu.</h1>
  <h2>
  This is sub heading</h2><a href="https://www.google.com" target="_blank">
  click here</a><div>block of code</div><br/><ul><li>

  firset list element</li><li>second list element</li></ul>
  <img src="" alt="image here"/> "block quote " <b> bold text </b>`;

  const [editorbutton , setEditor] = useState('maximize');
  const [previewbutton , setPreview] = useState('maximize');

  const [htmlcode , setHtml] = useState(firstpreviwew);
  const [parsedText , setText] = useState('');

  const handletextareamaximize = ()=>{
    if(editorbutton==='maximize'){
      setPreview('minimize');
      setEditor('minimize');
    }
    else{
      setPreview('maximize');
      setEditor('maximize');
    }
  }

  const handlepreviewmaximize = ()=>{
    if(previewbutton==='maximize'){
      setPreview('minimize');
      setEditor('minimize');
    }
    else{
      setPreview('maximize');
      setEditor('maximize');
    }
  }

useEffect(()=>{
  const parsedHtml = parse(htmlcode);
  setText(parsedHtml);
},[htmlcode]);

  return (
    <>
      <div className="container">
        {editorbutton==='maximize' && previewbutton==='maximize' ? 
        <><div className="editor-header">Editor
        <button style={{float:"right"}} onClick={handletextareamaximize}>{editorbutton}</button>
        </div>
        <textarea onChange={(e)=>setHtml(e.target.value)} value={htmlcode}></textarea>
        <h2></h2>
        <div className="preview-header">Preview
        <button style={{float:"right"}} onClick={handlepreviewmaximize}>{previewbutton}</button>
        </div>
        <div className='preview-container'>
            {parsedText}
        </div></>
        : previewbutton==='maximize'?
        <>
        <div className="preview-header">Preview
        <button style={{float:"right"}} onClick={handlepreviewmaximize}>{previewbutton}</button>
        </div>
        <div className='preview-container-maximize'>
            {parsedText}
        </div>
        </> :
        <>
        <div className="editor-header">Editor
        <button style={{float:"right"}} onClick={handletextareamaximize}>{editorbutton}</button>
        </div>
        <textarea className='textarea-maximized' onChange={(e)=>setHtml(e.target.value)} value={htmlcode}></textarea>
        </>}
        
      </div>
    </>
  )
}

export default App
