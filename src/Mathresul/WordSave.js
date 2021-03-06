import React from "react"
import MathJax from 'react-mathjax-preview'

const WordSave = (props) => {
    const { text } = props;
    // props.setText(text)
    
  
    return (
        text && text.includes('<math') ?
            <MathJax math={text} className='my-MathJax'
                config={{
                    extensions: ["tex2jax.js"],
                    "HTML-CSS": { scale: 250, linebreaks: { automatic: true } },
                    SVG: { linebreaks: { automatic: true } },
                    displayAlign: "left"
                }}
            // style={{fontSize: '2em'}}
            />
            :<div dangerouslySetInnerHTML={{ __html: text }} />
    );
}
export default WordSave;