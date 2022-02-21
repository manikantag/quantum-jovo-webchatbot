// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './style/theme.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );


import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import reactToWebComponent from "react-to-webcomponent";
import ChatWidget from './components/ChatWidget';
import './style/theme.css';


const ChatWidgetComponent = reactToWebComponent(ChatWidget, React, ReactDOM);

customElements.define("chat-widget", ChatWidgetComponent);

export default ChatWidgetComponent;
