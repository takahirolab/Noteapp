import React, {  Component,useState } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
const toolbar = [
    '|',
    'bold',
    'italic',
    'heading',
    '|',
    'quote',
    'unordered-list',
    'ordered-list',
    '|',
    'preview',
    'side-by-side',
    'fullscreen',
    '|',
    'guide',
]


const MarkDownEditor = (props) => {
    const [markdown, setMarkdown] = useState(props.description);
        return (
            <SimpleMDE value={markdown} onChange={(e) => props.MarkdownChange(e)} options={{ toolbar: toolbar }} />
        )
    }
export default MarkDownEditor;
