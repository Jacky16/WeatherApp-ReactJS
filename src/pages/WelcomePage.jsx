import React from 'react'
import {Link} from "react-router-dom"
const WelcomePage = props => {
    return (
        <div>
            Welcome
            <div>
                <Link to="/main">Volver a Main</Link>
            </div>
        </div>
    )
}


export default WelcomePage
