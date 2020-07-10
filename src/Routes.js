import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/HOC/Layout';
import PostNote from './components/post-note';

const Routes = () => {
    return (
        <Switch>

            <Layout>
                <Route path='/' exact component={PostNote} />
            </Layout>
        </Switch>
    )
}

export default Routes
