import React, { Component } from 'react';
import { TopBar } from '@shopify/polaris';

export default class NavBar extends Component {
  render() {
    const userMenuMarkup = <TopBar.UserMenu name="Helen B." detail="Titan Plus Extreme" avatar="user.svg" />;

    return (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        onNavigationToggle={this.props.openNavigationMenu}
      />
    );
  }
}
