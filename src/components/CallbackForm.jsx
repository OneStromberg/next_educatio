import { useState } from 'react'
import axios from 'axios'
import {
	Container,
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
	const isSmall = useMediaQuery('(max-width:1010px)')
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
			<Container style={{ padding: isMobile ? 0 : 24 }}>
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
					style={{
						background: `url(${background.src}) no-repeat center`,
						backgroundSize: 'cover', // was 'contain'
						width: isMobile ? '100%' : '95%',
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						minHeight: 500,
						aspectRatio: isMobile ? 'auto' : '9.5/4.9',
						margin: isMobile ? '10% 0 -8% 0' : '10% auto',
						paddingBottom: isMobile ? 50 : '',
					}}
				>
					<div
						style={{
							margin: isMobile ? '50px 0 0 0' : 0,
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
							gap: isMobile ? 8 : 15,
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
							variant='standard'
							color='secondary'
							required
							error={!!formErrors.name}
							helperText={
								<Typography variant='error_message'>
									{formErrors.name}
								</Typography>
							}
						/>
						<TextField
							name='phone'
							label={phoneField}
							placeholder={phonePalceholder}
							value={formData.phone}
							onChange={handleInputChange}
							fullWidth
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
							aria-label='submit form'
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
								padding: '0 0 1% 0',
								margin: isMobile ? '15% 0' : '2% 0 1% 0',
								transition: '.3s',
							}}
						>
							{buttonText}
							<div style={{ width: 15, height: 10 }}>
								<Arrow fill={isHovered ? '#E3B30A' : '#FFC804'} />
							</div>
						</StyledButton>
					</form>
				</Grid>
			</Container>
		</Grid>
	)
}

export default CallbackForm
