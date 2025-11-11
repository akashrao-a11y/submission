import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, submitForm } from '../formSlice';

const theme = {
    borderColor: '#1976d2',
    borderRadius: 12,
    padding: '2rem',
    marginBottom: '1.5rem',
    inputBg: '#f5f7fa',
    inputBorder: '#90caf9',
    inputFocus: '#1976d2',
    buttonBg: '#1976d2',
    buttonColor: '#fff',
    buttonHover: '#1565c0',
};

function FormComponent() {
    const dispatch = useDispatch();
    const fields = useSelector((state) => state.form.fields);

    const handleChange = (e) => {
        dispatch(updateField({ name: e.target.name, value: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm());
    };

    return (
        <div
            style={{
                border: `1.5px solid ${theme.borderColor}`,
                padding: theme.padding,
                borderRadius: theme.borderRadius,
                marginBottom: theme.marginBottom,
                background: '#fff',
                boxShadow: '0 2px 8px rgba(25, 118, 210, 0.07)',
            }}
        >
            <h2 style={{ color: theme.borderColor, marginBottom: 24 }}>Form Component</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username"
                    value={fields.username}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        marginBottom: 14,
                        padding: 10,
                        borderRadius: 6,
                        border: `1px solid ${theme.inputBorder}`,
                        background: theme.inputBg,
                        outlineColor: theme.inputFocus,
                        fontSize: 16,
                    }}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        marginBottom: 14,
                        padding: 10,
                        borderRadius: 6,
                        border: `1px solid ${theme.inputBorder}`,
                        background: theme.inputBg,
                        outlineColor: theme.inputFocus,
                        fontSize: 16,
                    }}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={fields.password}
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        marginBottom: 18,
                        padding: 10,
                        borderRadius: 6,
                        border: `1px solid ${theme.inputBorder}`,
                        background: theme.inputBg,
                        outlineColor: theme.inputFocus,
                        fontSize: 16,
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: 12,
                        borderRadius: 6,
                        border: 'none',
                        background: theme.buttonBg,
                        color: theme.buttonColor,
                        fontWeight: 600,
                        fontSize: 16,
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = theme.buttonHover)}
                    onMouseOut={e => (e.currentTarget.style.background = theme.buttonBg)}
                >
                    Submit
                </button>
            </form>
            {/* Live submitted box */}
            <div
                style={{
                    marginTop: 32,
                    padding: 16,
                    border: `1px solid ${theme.inputBorder}`,
                    borderRadius: 8,
                    background: '#f9f9f9',
                }}
            >
                <h3 style={{ marginBottom: 12, color: theme.borderColor }}>Submitted Box (Live)</h3>
                <div><strong>Username:</strong> {fields.username}</div>
                <div><strong>Email:</strong> {fields.email}</div>
                <div><strong>Password:</strong> {fields.password}</div>
            </div>
        </div>
    );
}

export default FormComponent;