import ImageText from "./ImageText";
import Nav from "./Nav";

function About({activeLink, setActiveLink}) {
    return (
        <>
        <ImageText activeLink={activeLink} setActiveLink={setActiveLink} />
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
        </>
    )
}

export default About;