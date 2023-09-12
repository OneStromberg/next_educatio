import { useState } from 'react'
import axios from 'axios'
import {
	Grid,
	Typography,
	Button,
	TextField,
	useMediaQuery,
} from '@mui/material'
import { styled } from '@mui/system'
import background from '../assets/questions_bg.svg'
import scratch from '../assets/scratch.svg'
import Arrow from './UI/Arrow'

const StyledButton = styled(Button)`
	&:hover {
		color: #e3b30a;
		svg {
			transition: all 0.3s ease;
			transform: translateX(15px);
		}
	}
`

const CallbackForm = ({ isEnglish }) => {
	const apiUrl = process.env.API_URL
	const apiKey = process.env.API_TOKEN
	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(max-width:1345px)')
	const [isHovered, setHovered] = useState(false)

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
	})
	const [formErrors, setFormErrors] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
	})

	const handleInputChange = event => {
		const { name, value } = event.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const validateForm = () => {
		let isValid = true
		const errors = {
			name: '',
			phone: '',
			email: '',
			message: '',
		}

		if (!formData.name) {
			isValid = false
			errors.name = 'Please enter your name'
		}

		if (!formData.phone) {
			isValid = false
			errors.phone = 'Please enter your phone number'
		} else if (!/^(\+3|)[0-9]{10,11}$/.test(formData.phone)) {
			isValid = false
			errors.phone = 'Please enter a valid Ukrainian phone number'
		}

		if (!formData.email) {
			isValid = false
			errors.email = 'Please enter your email'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			isValid = false
			errors.email = 'Please enter a valid email address'
		}

		if (!formData.message) {
			isValid = false
			errors.message = 'Please enter your message'
		}

		setFormErrors(errors)
		return isValid
	}

	const handleSubmit = async event => {
		event.preventDefault()
		if (validateForm()) {
			try {
				await axios.post(
					`${apiUrl}/callback-requests`,
					{
						data: formData,
					},
					{
						headers: {
							Authorization: `Bearer ${apiKey}`,
							Accept: 'application/json',
							'Content-Type': 'application/json',
						},
					}
				)
				setFormData({
					name: '',
					phone: '',
					email: '',
					message: '',
				})
				console.log('Form submitted successfully')
			} catch (error) {
				console.error('Error submitting form:', error)
			}
		}
	}

	const pageTitle = isEnglish
		? 'Do you have any questions?'
		: 'Залишились питання?'
	const pageSubTitle = isEnglish
		? 'Fill out the form and we will be happy to answer'
		: 'Заповніть форму і ми будемо раді відповісти'
	const nameField = isEnglish ? 'Name' : "Ім'я"
	const namePalceholder = isEnglish ? 'Enter your name' : "Введіть своє ім'я"
	const phoneField = isEnglish ? 'Phone number' : 'Номер телефону'
	const phonePalceholder = isEnglish
		? 'Enter your phone number'
		: 'Введіть свій номер телефону'
	const messageField = isEnglish ? 'Message' : 'Повідомлення'
	const messagePalceholder = isEnglish
		? 'Enter your message'
		: 'Введіть своє повідомлення'
	const buttonText = isEnglish ? 'Send' : 'Надіслати'

	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='center'
			style={{
				position: 'relative',
				background: '#fff',
				width: '100%',
			}}
		>
			<div
				style={{
					background: `url(${scratch.src}) center center no-repeat no-repeat`,
					width: 90,
					height: 150,
					position: 'absolute',
					transform: 'scaleX(-1)',
					bottom: 40,
					left: 0,
				}}
			/>
			<div
				style={{
					background: `url(${scratch.src}) center center no-repeat no-repeat`,
					width: 90,
					height: 150,
					position: 'absolute',
					top: 80,
					right: 0,
				}}
			/>

			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
				style={{
					background: `url(${background.src}) no-repeat center`,
					backgroundSize: isTablet ? 'cover' : isMobile ? 'contain' : '100%', // was 'contain'
					width: isMobile ? '100%' : isTablet ? '80%' : '75%',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					minHeight: 500,
					aspectRatio: isTablet ? 'auto' : '9.5/4.9',
					// maxHeight: 700,
					margin: isMobile ? '10% 0 -10% 0' : '10% auto',
					// paddingBottom: 50,
				}}
			>
				<div
					style={{
						margin: isMobile ? '50px 0 0 0' : '',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Typography
						id='contact'
						variant='h4_light'
						gutterBottom
						style={{
							textAlign: 'center',
						}}
					>
						{pageTitle}
					</Typography>
					<Typography variant='subtitle_light'>{pageSubTitle}</Typography>
				</div>
				<form
					onSubmit={handleSubmit}
					style={{
						display: 'flex',
						width: '80%',
						// height: '100%',
						flexDirection: 'column',
						alignItems: 'flex-end',
						color: '#FFFFFFB2',
					}}
				>
					<TextField
						name='name'
						label={nameField}
						placeholder={namePalceholder}
						value={formData.name}
						onChange={handleInputChange}
						fullWidth
						margin='normal'
						variant='standard'
						color='secondary'
						required
						error={!!formErrors.name}
						helperText={
							<Typography variant='error_message'>{formErrors.name}</Typography>
						}
					/>
					<TextField
						name='phone'
						label={phoneField}
						placeholder={phonePalceholder}
						value={formData.phone}
						onChange={handleInputChange}
						fullWidth
						margin='normal'
						variant='standard'
						color='secondary'
						required
						error={!!formErrors.phone}
						helperText={
							<Typography variant='error_message'>
								{formErrors.phone}
							</Typography>
						}
					/>
					<TextField
						name='email'
						label='Email'
						placeholder='example@site.com'
						value={formData.email}
						onChange={handleInputChange}
						fullWidth
						margin='normal'
						variant='standard'
						color='secondary'
						required
						error={!!formErrors.email}
						helperText={
							<Typography variant='error_message'>
								{formErrors.email}
							</Typography>
						}
					/>
					<TextField
						name='message'
						label={messageField}
						placeholder={messagePalceholder}
						value={formData.message}
						onChange={handleInputChange}
						fullWidth
						margin='normal'
						variant='standard'
						color='secondary'
						multiline
						rows={1}
						required
						error={!!formErrors.message}
						helperText={
							<Typography variant='error_message'>
								{formErrors.message}
							</Typography>
						}
					/>
					<StyledButton
						type='submit'
						variant='text'
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
						style={{
							cursor: 'pointer',
							display: 'flex',
							gap: 10,
							alignItems: 'center',
							color: '#FFC804',
							width: '10%',
							minWidth: 150,
							alignSelf: 'flex-end',
							padding: '0 0 4% 0',
							margin: '2% 0',
							transition: '.3s',
						}}
					>
						{buttonText}
						<div style={{ width: 14, height: 9 }}>
							<Arrow fill={isHovered ? '#E3B30A' : '#FFC804'} />
						</div>
					</StyledButton>
				</form>
			</Grid>
		</Grid>
	)
}

export default CallbackForm
