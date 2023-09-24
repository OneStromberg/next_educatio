import React from 'react'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Wavy from './UI/Wavy'

const StyledGrid = styled(Grid)(({ theme }) => ({
	minHeight: 600,
	background: '#fbfbfb',
	'& .header': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	'& iframe': {
		border: 'none',
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
		borderRadius: '8px',
		width: '100%',
		height: '100%',
		minHeight: 600,
		background: '#ffffff',
	},
}))

const CalendarContainer = ({ isEnglish, preferences, data }) => {
	if (!data) {
		return <div id='calendar' style={{ height: 700, background: '#fbfbfb' }} />
	}

	if (
		preferences.attributes.isShort ||
		data.length < 1 ||
		preferences.attributes.hideCalendar
	) {
		return null
	}

	const calendar = data.calendarURL
	const pageTitle = isEnglish ? 'Calendar' : 'Календар'

	return (
		<StyledGrid
			container
			id='calendar'
			direction='column'
			justifyContent='flex-start'
			alignItems='center'
		>
			<div className='header'>
				<Typography variant='h4_pink'>{pageTitle}</Typography>
				<Wavy fill={'#FF9888'} />
			</div>
			<Grid
				container
				spacing={2}
				alignItems='center'
				justifyContent='center'
				style={{
					width: '100%',
					height: '100vh',
					background: '#ededed',
					margin: '0',
				}}
			>
				<iframe src={calendar} title='calendar' loading='lazy'></iframe>
			</Grid>
		</StyledGrid>
	)
}

export default React.memo(CalendarContainer)
