import React from 'react';
import { Link } from 'react-router-dom';

const notFound = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6" style={{margin:"auto"}}>
                    <div className="card" style={{textAlign:"center"}}>
                        <div className="card-body">
                            <h4>Oops : Error 404</h4>
                            <p>The page you are looking for was not found ...</p>
                            <p>Click here to go back to the <Link to="/" className="card-link">Home</Link> page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default notFound;
