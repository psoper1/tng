import tngImage from './imgs/tng-image.jpg';

function ImageText() {
    return (
        <>
            <div className="image-text-container">
                <img src={tngImage} alt="True Nature Gaming" className="img-fluid" />
                <div className="image-text-overlay"></div>
                <div className="image-text-content">
                    <h1>True Nature Gaming</h1>
                </div>
            </div>
        </>
    )
}

export default ImageText;