import { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    TextField,
} from '@mui/material';

import axios from 'axios';

const CallbackForm = ({ isEnglish }) => {
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_TOKEN;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {
            name: '',
            phone: '',
            email: '',
            message: '',
        };

        if (!formData.name) {
            isValid = false;
            errors.name = 'Please enter your name';
        }

        if (!formData.phone) {
            isValid = false;
            errors.phone = 'Please enter your phone number';
        } else if (!/^(\+3|)[0-9]{10,11}$/.test(formData.phone)) {
            isValid = false;
            errors.phone = 'Please enter a valid Ukrainian phone number';
        }

        if (!formData.email) {
            isValid = false;
            errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.message) {
            isValid = false;
            errors.message = 'Please enter your message';
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                await axios.post(
                    `${apiUrl}/callback-requests`,
                    {
                        data: formData
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    }
                );
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                console.log('Form submitted successfully');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    const pageTitle = isEnglish ? 'Do you have any questions?' : 'Залишились питання?'
    const pageSubTitle = isEnglish ? 'Fill out the form and we will be happy to answer' : 'Заповніть форму і ми будемо раді відповісти'
    const nameField = isEnglish ? 'Name' : "Ім'я"
    const namePalceholder = isEnglish ? 'Enter your name' : "Введіть своє ім'я"
    const phoneField = isEnglish ? 'Phone number' : "Номер телефону"
    const phonePalceholder = isEnglish ? 'Enter your phone number' : "Введіть свій номер телефону"
    const messageField = isEnglish ? 'Message' : "Повідомлення"
    const messagePalceholder = isEnglish ? 'Enter your message' : "Введіть своє повідомлення"
    const buttonText = isEnglish ? 'Complete' : "Заповнити"

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ background: '#ededed', padding: '130px 0' }}
        >
            <div style={{
                paddingTop: '7%',
                paddingBottom: '3.5%',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <Typography id='contact' variant="title2" gutterBottom style={{
                    textAlign: 'center',
                    margin: '0 auto',
                    paddingBottom: '41px',
                }}>
                    {pageTitle}
                </Typography>
                <Typography variant='subtitle4'>{pageSubTitle}</Typography>
            </div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '50%',
                }}
            >
                <TextField
                    name="name"
                    label={nameField}
                    placeholder={namePalceholder}
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                    error={!!formErrors.name} // Add error prop
                    helperText={<Typography variant='error_message'>{formErrors.name}</Typography>} // Add helperText prop
                />
                <TextField
                    name="phone"
                    label={phoneField}
                    placeholder={phonePalceholder}
                    value={formData.phone}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                    error={!!formErrors.phone} // Add error prop
                    helperText={<Typography variant='error_message'>{formErrors.phone}</Typography>} // Add helperText prop
                />
                <TextField
                    name="email"
                    label="Email"
                    placeholder="example@site.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                    error={!!formErrors.email} // Add error prop
                    helperText={<Typography variant='error_message'>{formErrors.email}</Typography>} // Add helperText prop
                />
                <TextField
                    name="message"
                    label={messageField}
                    placeholder={messagePalceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                    error={!!formErrors.message} // Add error prop
                    helperText={<Typography variant='error_message'>{formErrors.message}</Typography>} // Add helperText prop
                />
                <Button
                    type="submit"
                    variant="contained"
                    style={{
                        cursor: 'pointer',
                        background: '#ef4056',
                        marginTop: '30px',
                        width: '30%',
                        minWidth: 150,
                    }}
                >
                    {buttonText}
                </Button>
            </form>
        </Grid>
    );
};

export default CallbackForm;