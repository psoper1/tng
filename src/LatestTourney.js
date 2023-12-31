import ImageText from "./ImageText";
import Nav from "./Nav";


function LatestTourney({activeLink, setActiveLink}) {
    return (
        <>
        <ImageText activeLink={activeLink} setActiveLink={setActiveLink} />
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
        </>
    )
}

export default LatestTourney;