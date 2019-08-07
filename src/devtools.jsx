import React from 'react';
import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const defaultIsVisible = true;

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={defaultIsVisible}
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>,
);

export default DevTools;
