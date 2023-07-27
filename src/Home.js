import ImageText from "./ImageText";
import Nav from "./Nav";

function Home({activeLink, setActiveLink}) {

    return (
        <>
            <ImageText activeLink={activeLink} setActiveLink={setActiveLink} />
            <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
        </>
    );
}

export default Home;