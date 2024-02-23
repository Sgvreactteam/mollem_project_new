import React, { useState, useEffect } from 'react';
import Gantt from '../../../src/components/gantt-chart/Gantt/Gantt';
import Toolbar from './Toolbar/Toolbar';
import MessageArea from './MessageArea/MessageArea';

const data = {
  data: [
    { id: 1, text: 'Task #1', start_date: '2020-02-12', duration: 3, progress: 0.6 },
    { id: 2, text: 'Task #2', start_date: '2020-02-16', duration: 3, progress: 0.4 }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' }
  ]
};

const GantApp = () => {
  const [currentZoom, setCurrentZoom] = useState('Days');
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const maxLogLength = 5;
    const newMessage = { message };
    const updatedMessages = [
      newMessage,
      ...messages
    ];

    if (updatedMessages.length > maxLogLength) {
      updatedMessages.length = maxLogLength;
    }

    setMessages(updatedMessages);
  };

  const logDataUpdate = (type, action, item, id) => {
    let text = item && item.text ? ` (${item.text})` : '';
    let message = `${type} ${action}: ${id} ${text}`;
    
    if (type === 'link' && action !== 'delete') {
      message += ` ( source: ${item.source}, target: ${item.target} )`;
    }

    addMessage(message);
  };

  const handleZoomChange = (zoom) => {
    setCurrentZoom(zoom);
  };

  useEffect(() => {
    // Additional logic to handle component mount and unmount can go here if needed
  }, []);

  return (
    <div>
      <div className="zoom-bar">
        <Toolbar
          zoom={currentZoom}
          onZoomChange={handleZoomChange}
        />
      </div>
      <div className="gantt-container">
        <Gantt
          tasks={data}
          zoom={currentZoom}
          onDataUpdated={logDataUpdate}
        />
      </div>
      <MessageArea
        messages={messages}
      />
    </div>
  );
};

export default GantApp;
