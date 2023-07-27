import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/latest-tourney'>Latest Tourney</NavLink>
                            </li>
                            <li className="nav-item">
                                Test
                            </li>
                            <li className="nav-item">
                                Test
                            </li>
                            <li className="nav-item">
                                Test
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;