import React from 'react';

function Body(props) {
    return (
        <div className="container">
            {props.images.map(picture => (
                <div
                    id={picture.id}
                    key={picture.id}
                    name={picture.name}
                    onClick={props.handleOnClick}
                    aria-label='click-item'
                    className={props.imageClass}
                    style={picture.style}
                />
            ))}
        </div>
    )
}

export default Body;