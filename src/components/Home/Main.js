import React from 'react';
import Layout from '../../components/Layout';
import cover from "../../cover.svg";

const MainPage = (props) => {
    return (
        <Layout>
            <div style={{marginTop : "100px"}}>
                <div className="row">
                    <div className="col-sm-6" style={{marginTop : "100px"}}>
                        <h3>Expenser, your expense management buddy</h3>
                        <p>Manage your expenses with ease and comfort. Visualize your expenses and earning with beautiful graphs and visualization pleasing to the eyes</p>
                    </div>

                    <div className="col-sm-6">
                        <img src={cover} alt="" style={{width:"100%"}}/>
                    </div>
                </div>   

            </div>
        </Layout>
    )
}

export default MainPage;