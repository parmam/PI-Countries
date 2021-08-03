import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {

    return(
        <React.Fragment>

                <p>Welcome</p>
                <Link to="home">                
                    <button type="button"> Go to CountriesApp </button>
                </Link>

        </React.Fragment>
    )
}



export default Welcome





