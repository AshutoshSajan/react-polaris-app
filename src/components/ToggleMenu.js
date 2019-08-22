import React from 'react';
import { Navigation } from '@shopify/polaris';
import { ArrowLeftMinor, LinkMinor } from '@shopify/polaris-icons';

export default function ToggleMenu() {
	return (
		<Navigation location="/">
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
						icon: LinkMinor
					}
				]}
			/>
		</Navigation>
	);
}
