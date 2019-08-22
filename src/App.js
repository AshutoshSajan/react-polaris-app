import React from 'react';
import { AppProvider, Frame } from '@shopify/polaris';

import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import ToggleMenu from './components/ToggleMenu';
import { headerTheme } from './static/themes';

class App extends React.Component {
  state = {
    showMobileNavigation: false
  };

  toggleState = () => {
    this.setState({
      showMobileNavigation: !this.state.showMobileNavigation
    });
  };

  render() {
    return (
      <div>
        <AppProvider theme={headerTheme}>
          <Frame
            topBar={<NavBar openNavigationMenu={this.toggleState} />}
            navigation={<ToggleMenu />}
            showMobileNavigation={this.state.showMobileNavigation}
            onNavigationDismiss={() => this.toggleState()}
          >
            <MainContent />
          </Frame>
        </AppProvider>
      </div>
    );
  }
}

export default App;
