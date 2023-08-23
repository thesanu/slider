import React, { useState } from 'react';
function ImageSlider() {
    const images = [
        { id: 1, url: 'https://cdn.statusqueen.com/mobilewallpaper/thumbnail/mahadev_mobile_wallpaper-1408.jpg' },
        { id: 2, url: 'https://godhindus.com/wp-content/uploads/2022/10/hd-photo-of-mahadev-1.jpg' },
        { id: 3, url: 'https://www.numbersinhindi.in/wp-content/uploads/2022/09/lord-shiva-hd-wallpapers-1920x1080-download.jpg' },
        { id: 4, url: 'https://cdn.pixabay.com/photo/2023/06/14/02/48/hindu-deity-8062172_1280.jpg' }
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const handleCircleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="image-slider">
            <div className="slider-container">
                <button className="previous-button" onClick={handlePrevious}>
                    Previous
                </button>
                <img src={images[activeIndex].url} alt={`Image ${activeIndex + 1}`} />
                <button className="next-button" onClick={handleNext}>
                    Next
                </button>
            </div>
            <div className="circle-options">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`circle ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleCircleClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default ImageSlider;