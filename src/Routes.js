import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/HOC/Layout';
import PostNote from './components/post-note';
import SingleNote from './components/view-single-note';

const Routes = () => {
    return (
        <Switch>
            <Layout>
                <Route path='/' exact component={PostNote} />
                <Route path='/note/:id' exact component={SingleNote} />
            </Layout>
        </Switch>
    )
}

export default Routes
