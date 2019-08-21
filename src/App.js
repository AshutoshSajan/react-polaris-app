import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

import CallCard from './components/CallCard';

import {
  AppProvider,
  Heading,
  Page,
  CalloutCard,
  TopBar,
  Card,
  FormLayout,
  Stack,
  Layout,
  TextField,
  Frame
} from '@shopify/polaris';
// import { ArrowLeftMinor } from '@shopify/polaris-icons';

class App extends React.Component {
  render() {
    return (
      <>
        {<Header />}
        {
          //<NavBar />
        }
        <Layout>
          <div>
            <AppProvider>
              <Layout.Section
                title="Store details"
                description="Shopify and your customers will use this information to contact you."
              >
                <Stack>
                  {
                    // <Heading>MARKETING</Heading>
                    // <CallCard />
                    // <CallCard />
                    // <Heading>MARKETING</Heading>
                    // <CallCard />
                    // <CallCard />
                    // <CallCard />
                    // <CallCard />
                  }
                </Stack>
              </Layout.Section>
            </AppProvider>
          </div>
        </Layout>
      </>
    );
  }
}

export default App;
