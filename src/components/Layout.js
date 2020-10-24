import React from 'react';

const layout = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default layout;