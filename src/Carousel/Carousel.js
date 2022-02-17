import React, {useState} from 'react';


import "./Carousel.css";

//Images Item for the carousel
export const CarouselItem = ({children, width}) => {
    console.log(children)
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    )
}


const Carousel =({children }) => {
    const [currentIndex, setCurrentIndex] = useState(0); //the current index of the slide

    const updateIndex = (newIndex) => { //update the index to move to the next slide
        if(newIndex < 0){
            newIndex = React.Childdren.count(children) - 1;
        } else if(newIndex >= React.Children.count(children)){
            newIndex = 0;
        }

        setCurrentIndex(newIndex)//set the current index 
    }

    //display the carousel
    return(
        <div className="carousel">
            <div className="inner" style={{transform :`translateX(-${currentIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            <div className="indicators">
                <button 
                    onClick={() => {
                        updateIndex(currentIndex - 1);
                    }}
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        updateIndex(currentIndex + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Carousel;