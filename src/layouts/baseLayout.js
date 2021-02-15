import React from "react";
import {Link} from "react-router-dom";

export const BaseLayout = ({children}) => {
    return (
        <div className='wrapper'>
            <header>
                <Link to={'/'}> List of films </Link>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Information taken from https://www.themoviedb.org
            </footer>
        </div>
    )
}
