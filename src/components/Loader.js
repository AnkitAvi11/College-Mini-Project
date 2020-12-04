import React from 'react';

const Loader = (props) => {
    return (
        <div className="container" style={{textAlign:"center", padding:"50px"}}>
            <div className="spinner-border text-primary" role="status" style={{height:"50px", width:"50px"}}>
            <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;