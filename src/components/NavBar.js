import React from 'react';
import { AppProvider, Frame, TopBar } from '@shopify/polaris';
import { ArrowLeftMinor } from '@shopify/polaris-icons';

export default class NavBar extends React.Component {
  state = {
    userMenuOpen: false,
    searchText: ''
  };

  render() {
    const { state, toggleUserMenu } = this;
    const { userMenuOpen } = state;

    const theme = {
      colors: {
        topBar: {
          background: '#202e78'
        }
      },
      logo: {
        width: 124,
        topBarSource:
          'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel'
      }
    };

    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }]
          },
          {
            items: [{ content: 'Community forums' }]
          }
        ]}
        name="Helen B."
        detail="Titan Plus Extreme"
        avatar="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj40rvE9ZPkAhXRAnIKHXYYAg8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.more.com%2Fcelebrity%2F20-nicest-celebrities-hollywood%2F&psig=AOvVaw0Chgl45TyBPRtz56otStzX&ust=1566475321339405"
        open={userMenuOpen}
        onToggle={toggleUserMenu}
      />
    );

    const topBarMarkup = (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        onNavigationToggle={() => {
          console.log('toggle navigation visibility');
        }}
      />
    );

    return (
      <div style={{ height: '250px' }}>
        <AppProvider theme={theme}>
          <Frame topBar={topBarMarkup} />
        </AppProvider>
      </div>
    );
  }

  toggleUserMenu = () => {
    this.setState(({ userMenuOpen }) => ({ userMenuOpen: !userMenuOpen }));
  };
}
