import React from 'react';
import Layout from '@theme/Layout';
import ApiDoc from './components/ApiDoc';

function APIs() {

    return (
        <Layout>
            <ApiDoc swaggerUrl={process.env.REACT_APP_SWAGGER_URL}/>
        </Layout>
    );
}

export default APIs;
