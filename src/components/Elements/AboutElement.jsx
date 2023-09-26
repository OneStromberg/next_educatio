import { Grid, Typography } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function AboutElement({ index, item, isMobile = { isMobile } }) {
	const apiUrl = process.env.API_URL
	return (
		<div
			key={index}
			style={{
				display: 'flex',
				justifyContent: 'center',
				maxWidth: '100%',
				// marginTop: isMobile ? 0 : index % 2 === 0 ? '-15%' : '15%',
			}}
		>
			<Grid
				item
				xs={12}
				sm={6}
				style={{
					display: 'flex',
					flexWrap: 'nowrap',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					aspectRatio: '2.5/1',
					flexDirection: isMobile ? 'column' : 'row',
					// paddingTop: 40,
				}}
			>
				<Image
					src={`${apiUrl.slice(0, apiUrl.length - 4)}${
						item?.attributes?.image?.data?.attributes?.url
					}`}
					alt='About Us'
					width={180}
					height={194}
					style={{ width: '90%' }}
					loading='lazy'
				/>
				<Grid
					item
					xs={12}
					sm={6}
					margin={isMobile ? '15px 0 0 0' : '0 0 0 50px'}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 5,
						width: isMobile ? '90%' : '100%',
					}}
				>
					<Typography variant='about_heading' component='h3' gutterBottom>
						{item.attributes.title}
					</Typography>
					<Typography variant='about_subheading' component='p' gutterBottom>
						<ReactMarkdown components={{ p: React.Fragment }}>
							{item.attributes.text}
						</ReactMarkdown>
					</Typography>
				</Grid>
			</Grid>
		</div>
	)
}
