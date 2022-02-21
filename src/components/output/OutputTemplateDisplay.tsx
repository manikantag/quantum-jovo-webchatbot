import { NormalizedOutputTemplate, QuickReplyValue } from '@jovotech/client-web';
import { type } from 'os';
import React, { VFC } from 'react';
import MessageDisplay from './MessageDisplay';
import QuantumMap from './QuantumMap';
import QuickReplyDisplay from './QuickReplyDisplay';

export interface OutputTemplateDisplayProps {
  output: NormalizedOutputTemplate;
  onQuickReplyClick?: (quickReply: QuickReplyValue) => unknown;
}

interface WebOutputResponse {
  type: string,
  [key: string]: any
}

function renderCustomOutput(webOutput: WebOutputResponse) {
  switch(webOutput.type) {
    case 'map':
      return <QuantumMap location={webOutput.location} />
  }
}

const OutputTemplateDisplay: VFC<OutputTemplateDisplayProps> = ({ output, onQuickReplyClick }) => {
  return (
    <div className="space-y-2 inline-flex flex-col">
      {output.message && <MessageDisplay message={output.message} className="bg-white" />}

      {output.quickReplies?.length && (
        <div className="space-x-2">
          {output.quickReplies.map((quickReply, index) => (
            <QuickReplyDisplay
              quickReply={quickReply}
              key={index}
              onClick={() => {
                onQuickReplyClick?.(quickReply);
              }}
            />
          ))}
        </div>
      )}
      
      {output.platforms?.web?.type && (
        renderCustomOutput(output.platforms?.web as WebOutputResponse)
      )}
    </div>
  );
};

export default OutputTemplateDisplay;
