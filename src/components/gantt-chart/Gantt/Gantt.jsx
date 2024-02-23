import React, { useEffect, useRef } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import './Gantt.css';


const Gantt = ({ tasks, zoom, onDataUpdated }) => {
  const ganttContainerRef = useRef(true);
  let dataProcessor = null;

  const initZoom = () => {
    gantt.ext.zoom.init({
      levels: [
        {
          name: 'Hours',
          scale_height: 60,
          min_column_width: 30,
          scales: [
            { unit: 'day', step: 1, format: '%d %M' },
            { unit: 'hour', step: 1, format: '%H' }
          ]
        },
        {
          name: 'Days',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: 'week', step: 1, format: 'Week #%W' },
            { unit: 'day', step: 1, format: '%d %M' }
          ]
        },
        {
          name: 'Months',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: 'month', step: 1, format: '%F' },
            { unit: 'week', step: 1, format: '#%W' }
          ]
        }
      ]
    });
  };

  const setZoom = (value) => {
    if (!gantt.ext.zoom.getLevels()) {
      initZoom();
    }
    gantt.ext.zoom.setLevel(value);
  };

  const initGanttDataProcessor = () => {
    dataProcessor = gantt.createDataProcessor((type, action, item, id) => {
      return new Promise((resolve, reject) => {
        if (onDataUpdated) {
          onDataUpdated(type, action, item, id);
        }
        resolve();
      });
    });
  };

  useEffect(() => {
    gantt.config.date_format = '%Y-%m-%d %H:%i';

    gantt.templates.task_class = function (start, end, task) {
      return 'custom-task-bar';
    };

    ganttContainerRef.current.classList.add('custom-gantt-container');
    gantt.init(ganttContainerRef.current);
    initGanttDataProcessor();
    gantt.parse(tasks);

    return () => {
      if (dataProcessor) {
        dataProcessor.destructor();
        dataProcessor = null;
      }
    };
  }, [tasks]);

  useEffect(() => {
    setZoom(zoom);
  }, [zoom]);

  return (
    <div ref={ganttContainerRef} style={{ width: '100%', height: '100%' }}></div>
  );
};

export default Gantt;
