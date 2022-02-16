import { useState } from 'react';
import { SwapUst, SwapOrne } from 'components/swap';
import { Grid, Heading, Paragraph } from 'components/ui';

enum SwapDirection {
	UstToOrne,
	OrneToUst,
}

export function Swap() {
	const [swapDirection, setSwapDirection] = useState<SwapDirection>(SwapDirection.UstToOrne);

	return (
		<Grid gap={2}>
			<Grid as="header" gap={2}>
				<Heading css={{ borderLeft: '5px solid $textColor', pl: '$3' }}>Swap</Heading>
				<Paragraph>Instantly trade $ORNE and UST</Paragraph>
			</Grid>

			{swapDirection === SwapDirection.UstToOrne ? (
				<SwapUst onChangeDirection={() => setSwapDirection(SwapDirection.OrneToUst)} />
			) : (
				<SwapOrne onChangeDirection={() => setSwapDirection(SwapDirection.UstToOrne)} />
			)}
		</Grid>
	);
}
