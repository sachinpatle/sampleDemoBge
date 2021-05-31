import React from 'react'
import AdminHeader from './AdminHeader'

function AdminDefaultLayout({children}) {
    console.log("children")
    console.log(children)
    return (
        <div>
            <AdminHeader/>
            {children}
        </div>
    )
}

export default AdminDefaultLayout
