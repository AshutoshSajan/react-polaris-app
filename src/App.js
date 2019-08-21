import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { AppProvider, Page, TopBar } from '@shopify/polaris';
// import { ArrowLeftMinor } from '@shopify/polaris-icons';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {
          <AppProvider>
            <Page className="page">
              <p>page content</p>
            </Page>
          </AppProvider>
        }
      </div>
    );
  }
}

export default App;
