import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/latest-tourney">Latest Tourney</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/test3">Test 3</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/test4">Test 4</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/test5">Test 5</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About TNG</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;