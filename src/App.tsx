import { observer } from 'mobx-react-lite';
import React, { VFC } from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import reactToWebComponent from "react-to-webcomponent";
import ChatWidget from './components/ChatWidget';


const App: VFC = observer((props) => {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <ChatWidget />
    </div>
  );
});


const ChatWidgetComponent = reactToWebComponent(ChatWidget, React, ReactDOM);

customElements.define("chat-widget", ChatWidgetComponent);

export default App;
