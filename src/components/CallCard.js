import React, { Component } from 'react';
import {
	AppProvider,
	Thumbnail,
	Page,
	CalloutCard,
	TopBar,
	Card,
	FormLayout,
	Stack,
	Layout,
	TextField,
	Heading,
	Button,
	TextContainer,
	Icon,
	TextStyle
} from '@shopify/polaris';

export default class CallCard extends Component {
	render() {
		return (
			<div style={{ display: 'flex', padding: '20px', background: '#fff', alignItems: 'flex-start' }}>
				<Thumbnail source="pushOwl.png" alt="Black choker necklace" />
				<div className="cardContainer" style={{ padding: '0 20px' }}>
					<TextContainer spacing="loose">
						<Heading>PushOwl Web Push Notifications</Heading>
						<p style={{ display: 'flex', alignItems: 'center' }}>
							<img src="star.svg" alt="star" width="15" />
							<span style={{ paddingLeft: '10px' }}>5.0 (1000+ reviws)</span>
							{
								// <Icon source="star.svg" />
							}
						</p>
						<p>Recover Abandoned Carts via Web Push Notifications</p>
						<Button primary>Add App</Button>
						<br />
						<TextStyle variation="positive">25% OFF on 1st month</TextStyle>
					</TextContainer>
				</div>
			</div>
		);
	}
}
