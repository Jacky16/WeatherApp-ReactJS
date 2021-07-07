import React from 'react'
import { Link } from "react-router-dom"
export const NotFoundPage = () => {
    return (
        <div>
            not found
            <div>
                <Link to="/main">Volver a Main</Link>
            </div>  
        </div>
    )
}

export default NotFoundPage;

