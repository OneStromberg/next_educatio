import { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Typography } from '@mui/material'
import Wavy from './UI/Wavy'

const CalendarContainer = ({ isEnglish, preferences, data }) => {

	if (!data) {
		return (
			<div id='calendar'>
				<div style={{ height: 700, background: '#fbfbfb' }}></div>
			</div>
		)
	}
	if (
		preferences.attributes.isShort ||
		data.length < 1 ||
		preferences.attributes.hideCalendar
	) {
		return <></>
	}

	const calendar = data.calendarURL
	const pageTitle = isEnglish ? 'Calendar' : 'Календар'

	return (
		<Grid
			container
			id='calendar'
			direction='column'
			justifyContent='flex-start'
			alignItems='center'
			style={{
				minHeight: 600,
				background: '#fbfbfb',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant='h4_pink'>{pageTitle}</Typography>
				<Wavy fill={'#FF9888'} />
			</div>{' '}
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
				<iframe
					src={calendar}
					style={{ borderWidth: 0, minHeight: 600 }}
					title='calendar'
					width='100%'
					height='100%'
				></iframe>
			</Grid>
		</Grid>
	)
}

export default CalendarContainer
