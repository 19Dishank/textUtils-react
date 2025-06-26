// Alert.js
import React from 'react';

const Alert = (props) => {
    const cap = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        props.alert && (
            <div
                className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                role="alert"
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 9999,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    minWidth: '250px',
                }}

            >
                <strong>{cap(props.alert.type)}:</strong> {cap(props.alert.message)}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={props.onClose}
                ></button>
            </div>
        )
    );
};

export default Alert;
