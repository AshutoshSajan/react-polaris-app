import React from 'react';
import ProductCard from './ProductCard';
import { DisplayText } from '@shopify/polaris';

export default function MainContent() {
	return (
		<div className="main-content-container">
			<div className="main-container-heading">
				<DisplayText size="large">Recomended apps from our partners</DisplayText>
			</div>
			<div className="card-section">
				<div className="card-section-heading">
					<DisplayText size="small">MARKETING</DisplayText>
				</div>
				<div className="card-container">
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
			<div className="card-section">
				<div className="card-section-heading">
					<DisplayText size="small">MARKETING</DisplayText>
				</div>
				<div className="card-container">
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</div>
	);
}
