import React, { useState } from 'react';
import './RegistrationForm.css'; // Importing CSS for styling

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        name: '',
        address: '',
        country: '',
        zipCode: '',
        email: '',
        gender: '',
        language: [],
        about: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                language: checked ? [...formData.language, value] : formData.language.filter(l => l !== value)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.userId || formData.userId.length < 5 || formData.userId.length > 10) {
            formErrors.userId = 'User ID must be 5 to 10 characters';
        }
        if (!formData.password || formData.password.length < 10 || formData.password.length > 12) {
            formErrors.password = 'Password must be 10 to 12 characters';
        }
        if (!formData.name.match(/^[A-Za-z\s]+$/)) {
            formErrors.name = 'Name must contain only alphabets';
        }
        if (!formData.country) {
            formErrors.country = 'Country is required';
        }
        if (!formData.zipCode) {
            formErrors.zipCode = 'Zip Code is required';
        }
        if (!formData.email.match(/\S+@\S+\.\S+/)) {
            formErrors.email = 'Invalid email address';
        }
        if (!formData.gender) {
            formErrors.gender = 'Gender is required';
        }
        if (formData.language.length === 0) {
            formErrors.language = 'At least one language must be selected';
        }

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <div className="form-container">
            <h1>Registration Form</h1>

            {isSubmitted ? (
                <div className="success-message">Form submitted successfully!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userId">User Id</label>
                        <input
                            type="text"
                            name="userId"
                            value={formData.userId}
                            onChange={handleInputChange}
                            placeholder="Required and must be 5 to 10 characters"
                        />
                        {errors.userId && <span className="error">{errors.userId}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Required and must be 10 to 12 characters"
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Required and alphabets only"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Optional"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="Required"
                        />
                        {errors.country && <span className="error">{errors.country}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="zipCode">Zip code</label>
                        <input
                            type="number"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="Required"
                        />
                        {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Required"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleInputChange}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleInputChange}
                                />
                                Female
                            </label>
                        </div>
                        {errors.gender && <span className="error">{errors.gender}</span>}
                    </div>

                    <div className="form-group">
                        <label>Language</label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="English"
                                    checked={formData.language.includes('English')}
                                    onChange={handleInputChange}
                                />
                                English
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="Non English"
                                    checked={formData.language.includes('Non English')}
                                    onChange={handleInputChange}
                                />
                                Non English
                            </label>
                        </div>
                        {errors.language && <span className="error">{errors.language}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="about">About</label>
                        <input
                            type="text"
                            name="about"
                            value={formData.about}
                            onChange={handleInputChange}
                            placeholder="Optional"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default RegistrationForm;
