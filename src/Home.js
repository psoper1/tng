import Nav from "./Nav";
import tngImage from './imgs/tng-image.jpg';

function Home() {
    return (
        <>
            <div className="position-relative">
                <img src={tngImage} alt="True Nature Gaming" className="img-fluid" />
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="text-white">True Nature Gaming</h1>
                </div>
            </div>
            <Nav />
        </>
    );
}

export default Home;