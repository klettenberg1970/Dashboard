import ReactMarkdown from 'react-markdown';
import { obsidianToMarkdown } from './obsidianToMarkdown.js';
import './markdown.css';

export default function ShowMD({ markdown, mdSichtbar, onClose }) {  // ← onClose empfangen

  const onEdit = ()=>{
    console.log(markdown)

  }
  return (
    <div className="markdown-container">
      <div className="markdown-edit">
        
 <button onClick={onClose}>X</button> 
 <button onClick={onEdit}> Bearbeiten</button>
 
      </div>
      
      
      {mdSichtbar && (
        <div className="markdown">
          <ReactMarkdown
            components={{
              a: ({ href, children }) => {
                const istExtern = href.startsWith('http://') || href.startsWith('https://');

                if (istExtern) {
                  return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
                } else {
                  return (
                    <span
                      onClick={() => onDateiOeffnen(href)}
                      className="markdown-internerLink"
                    >
                      {children}
                    </span>
                  );
                }
              }
            }}
          >
            {obsidianToMarkdown(markdown)}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}