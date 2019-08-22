import React from 'react';
import { AppProvider, Frame } from '@shopify/polaris';

import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import ToggleMenu from './components/ToggleMenu';
import { headerTheme } from './static/themes';

const App = () => {
  return (
    <div>
      <AppProvider theme={headerTheme}>
        <Frame topBar={<NavBar />} navigation={<ToggleMenu />}>
          <MainContent />
        </Frame>
      </AppProvider>
    </div>
  );
};

export default App;
