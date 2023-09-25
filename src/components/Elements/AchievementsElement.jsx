import React from 'react'
import { styled } from '@mui/system'
import { Grid, Typography, useMediaQuery } from '@mui/material'

const GridItem = styled(Grid)`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	gap: 20px;
	padding: 0;
	width: 100%;
	max-width: 100%;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 800px) {
		width: 100%;
		grid-template-columns: 1fr;
		gap: 10px;
	}
`
export default function AchievementsElement({ item }) {
	const isMobile = useMediaQuery('(max-width:800px)')
	return (
		<GridItem item key={item.id}>
			<Typography
				variant='h3_light'
				style={{
					lineHeight: 1,
					width: 'fit-content',
					display: 'flex',
					justifySelf: isMobile ? 'flex-start' : 'flex-end',
				}}
			>
				{item.attributes.number}
			</Typography>
			<Typography variant='text_light' gutterBottom>
				{item.attributes.title}
			</Typography>
		</GridItem>
	)
}
