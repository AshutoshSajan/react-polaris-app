import React from 'react';
import { AppProvider, Frame, TopBar, Heading, Thumbnail } from '@shopify/polaris';
import { ArrowLeftMinor } from '@shopify/polaris-icons';
import ToggleMenu from './ToggleMenu';

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
    const userMenuMarkup = <TopBar.UserMenu name="Helen B." detail="Titan Plus Extreme" avatar="user.svg" />;

    return (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        showMobileNavigation={this.state.showMobileNavigation}
        onNavigationToggle={this.toggleState('showMobileNavigation')}
      />
    );
  }
}
