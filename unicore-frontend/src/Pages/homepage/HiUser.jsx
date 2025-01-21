import { React, useState, useEffect } from 'react';
import { useAuth } from '../../Authentication/AuthProvider'; // Assuming you have a useAuth hook

const HiUser = () => {
    const { user } = useAuth(); // Get the current user from the AuthProvider

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const style = {
        textAlign: 'center',
        margin: '50px 0',
        marginTop: isMobile ? '0' : '-100px',
        color: '#007bff'
    };

    return (
        <div style={style}>
            {user ? (
                <>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                        Hi, {user.displayName || user.email}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#555' }}>
                        Explore our offerings and make the most of your journey!
                    </p>
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default HiUser;
