import React from 'react';
import { AppProvider, Frame, TopBar, Heading, Thumbnail } from '@shopify/polaris';
import { ArrowLeftMinor } from '@shopify/polaris-icons';

export default class NavBar extends React.Component {
  state = {
    showMobileNavigation: false
  };

  toggleState = key => {
    return () => {
      this.setState(prevState => ({ [key]: !prevState[key] }));
    };
  };

  render() {
    const { state } = this;

    const theme = {
      colors: {
        topBar: {
          background: '#202e78'
        }
      },

      logo: {
        width: 40,
        avatar: 'whatsapp.svg',
        topBarSource: 'whatsapp.svg',
        accessibilityLabel: 'WhatsChat'
      }
    };

    {
      // const thumb = (
      //   <Thumbnail
      //     source="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj40rvE9ZPkAhXRAnIKHXYYAg8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.more.com%2Fcelebrity%2F20-nicest-celebrities-hollywood%2F&psig=AOvVaw0Chgl45TyBPRtz56otStzX&ust=1566475321339405"
      //     alt="Hollywod celeb"
      //   />
      // );
    }

    const userMenuMarkup = <TopBar.UserMenu name="Helen B." detail="Titan Plus Extreme" avatar="user.svg" />;

    const topBarMarkup = (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        onNavigationToggle={this.toggleState('showMobileNavigation')}
      />
    );

    return (
      <AppProvider theme={theme}>
        <Frame topBar={topBarMarkup} />
      </AppProvider>
    );
  }
}
