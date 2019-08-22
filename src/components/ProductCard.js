import React, { Component } from 'react';
import { Thumbnail, Heading, Button, TextContainer, Icon, TextStyle } from '@shopify/polaris';

export default class ProductCard extends Component {
	render() {
		return (
			<div className="product-card">
				<Thumbnail source="pushOwl.png" alt="Black choker necklace" />
				<div className="card">
					<TextContainer spacing="loose">
						<Heading>PushOwl Web Push Notifications</Heading>
						<p style={{ display: 'flex', alignItems: 'center' }}>
							<img src="star.svg" alt="star" width="15" />
							<span className="app-rating">5.0 (1000+ reviws)</span>
						</p>
						<p>Recover Abandoned Carts via Web Push Notifications</p>
						<Button primary>Add App</Button>
						<p>
							<TextStyle variation="positive">25% OFF on 1st month</TextStyle>
						</p>
					</TextContainer>
				</div>
			</div>
		);
	}
}
