import React from 'react'
import AdminPortalLayout from "./AdminPortalLayout"
function AdminDashboard() {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <AdminPortalLayout />
            <div>
                Admin Dashboard
            </div>
        </div>
    )
}

export default AdminDashboard
