import React, { useState } from 'react';

const AdminLoginPage = () => {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle admin login logic here
        console.log('Admin Email:', adminEmail);
        console.log('Admin Password:', adminPassword);
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Admin Email:</label>
                    <input
                        type="email"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Admin Password:</label>
                    <input
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLoginPage;
