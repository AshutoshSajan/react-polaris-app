import React from 'react';
import {
  ActionList,
  AppProvider,
  Card,
  ContextualSaveBar,
  FormLayout,
  Frame,
  Layout,
  Loading,
  Modal,
  Navigation,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  TextContainer,
  TextField,
  Toast,
  TopBar
} from '@shopify/polaris';
import { ArrowLeftMinor, ConversationMinor, HomeMajorMonotone, OrdersMajorTwotone } from '@shopify/polaris-icons';

export default class Header extends React.Component {
  defaultState = {
    emailFieldValue: 'dharma@jadedpixel.com',
    nameFieldValue: 'Jaded Pixel'
  };

  state = {
    showToast: false,
    isLoading: false,
    isDirty: false,
    searchActive: false,
    searchText: '',
    userMenuOpen: false,
    showMobileNavigation: false,
    modalActive: false,
    nameFieldValue: this.defaultState.nameFieldValue,
    emailFieldValue: this.defaultState.emailFieldValue,
    storeName: this.defaultState.nameFieldValue,
    supportSubject: '',
    supportMessage: ''
  };

  render() {
    const {
      showToast,
      isLoading,
      isDirty,
      searchActive,
      searchText,
      userMenuOpen,
      showMobileNavigation,
      nameFieldValue,
      emailFieldValue,
      modalActive,
      storeName
    } = this.state;

    const toastMarkup = showToast ? <Toast onDismiss={this.toggleState('showToast')} content="Changes saved" /> : null;

    const userMenuActions = [
      {
        items: [{ content: 'Community forums' }]
      }
    ];

    const navigationUserMenuMarkup = (
      <Navigation.UserMenu actions={userMenuActions} name="Dharma" detail={storeName} avatarInitials="D" />
    );

    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={userMenuActions}
        name="Dharma"
        detail={storeName}
        avatar="whatsapp.svg"
        open={userMenuOpen}
        onToggle={this.toggleState('userMenuOpen')}
      />
    );

    const topBarMarkup = (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        onNavigationToggle={this.toggleState('showMobileNavigation')}
      />
    );

    const navigationMarkup = (
      <Navigation location="/" userMenu={navigationUserMenuMarkup}>
        <Navigation.Section
          items={[
            {
              label: 'Back to Shopify',
              icon: ArrowLeftMinor
            }
          ]}
        />
        <Navigation.Section
          title="PARTNERS"
          items={[
            {
              label: 'Recomended Apps',
              icon: './price-tag.svg',
              onClick: this.toggleState('isLoading')
            }
          ]}
          action={{
            icon: ConversationMinor,
            accessibilityLabel: 'Contact support',
            onClick: this.toggleState('modalActive')
          }}
        />
      </Navigation>
    );

    const loadingMarkup = isLoading ? <Loading /> : null;

    const actualPageMarkup = (
      <Page title="Account">
        <Layout>
          <Layout.AnnotatedSection
            title="Account details"
            description="Jaded Pixel will use this as your account information."
          >
            <Card sectioned>
              {
                // <FormLayout>
                //   <TextField label="Full name" value={nameFieldValue} onChange={this.handleNameFieldChange} />
                //   <TextField type="email" label="Email" value={emailFieldValue} onChange={this.handleEmailFieldChange} />
                // </FormLayout>
              }
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );

    const loadingPageMarkup = (
      <SkeletonPage>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={9} />
              </TextContainer>
            </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );

    const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

    const modalMarkup = (
      <Modal
        open={modalActive}
        onClose={this.toggleState('modalActive')}
        title="Contact support"
        primaryAction={{
          content: 'Send',
          onAction: this.toggleState('modalActive')
        }}
      >
        <Modal.Section>
          <FormLayout>
            <TextField label="Subject" value={this.state.supportSubject} onChange={this.handleSubjectChange} />
            <TextField
              label="Message"
              value={this.state.supportMessage}
              onChange={this.handleMessageChange}
              multiline
            />
          </FormLayout>
        </Modal.Section>
      </Modal>
    );

    const theme = {
      colors: {
        topBar: {
          background: '#357997'
        }
      },
      logo: {
        width: 124,
        topBarSource:
          'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        contextualSaveBarSource:
          'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel'
      }
    };

    return (
      <div style={{ height: '500px' }}>
        <AppProvider theme={theme}>
          <Frame
            topBar={topBarMarkup}
            navigation={navigationMarkup}
            showMobileNavigation={showMobileNavigation}
            onNavigationDismiss={this.toggleState('showMobileNavigation')}
          >
            {loadingMarkup}
            {pageMarkup}
            {toastMarkup}
            {modalMarkup}
          </Frame>
        </AppProvider>
      </div>
    );
  }

  toggleState = key => {
    return () => {
      this.setState(prevState => ({ [key]: !prevState[key] }));
    };
  };

  handleSave = () => {
    this.defaultState.nameFieldValue = this.state.nameFieldValue;
    this.defaultState.emailFieldValue = this.state.emailFieldValue;

    this.setState({
      isDirty: false,
      showToast: true,
      storeName: this.defaultState.nameFieldValue
    });
  };

  handleDiscard = () => {
    this.setState({
      emailFieldValue: this.defaultState.emailFieldValue,
      nameFieldValue: this.defaultState.nameFieldValue,
      isDirty: false
    });
  };

  handleSubjectChange = supportSubject => {
    this.setState({ supportSubject });
  };

  handleMessageChange = supportMessage => {
    this.setState({ supportMessage });
  };
}
