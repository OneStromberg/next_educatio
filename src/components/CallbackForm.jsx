import { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    TextField,
} from '@mui/material';

import axios from 'axios';

const CallbackForm = () => {
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
        } else if (!/^(\+38)?\(0[1-9][0-9]\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(formData.phone)) {
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
                    Do you have any questions?
                </Typography>
                <Typography variant='subtitle4'>Fill out the form and we will be happy to answer</Typography>
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
                    label="Name"
                    placeholder="Enter your name"
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
                    label="Phone Number"
                    placeholder="Enter your phone number"
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
                    label="Message"
                    placeholder="Enter your message"
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
                    Complete
                </Button>
            </form>
        </Grid>
    );
};

export default CallbackForm;