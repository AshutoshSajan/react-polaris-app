import React from 'react';
import ProductCard from './ProductCard';
import { Heading, DisplayText } from '@shopify/polaris';

const MainContent = props => {
	return (
		<div className="main-content-container">
			<div className="main-container-heading">
				<DisplayText size="large">Recomended apps from our partners</DisplayText>
			</div>
			<div>
				<div className="card-section">
					<div className="card-section-heading">
						<DisplayText size="small">MARKETING</DisplayText>
					</div>
					<div className="card-container">
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
						<ProductCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
