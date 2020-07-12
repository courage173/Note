import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/HOC/Layout';
import PostNote from './components/post-note';
import SingleNote from './components/view-single-note';
import SavedNotes from './components/saved-note/index';
import Favourite from './components/favourite';

const Routes = () => {
    return (
        <Switch>
            <Layout>
                <Route path='/' exact component={PostNote} />
                <Route path='/note/:id' exact component={SingleNote} />
                <Route path='/save-notes' exact component={SavedNotes} />
                <Route path='/favourite' exact component={Favourite} />
            </Layout>
        </Switch>
    )
}

export default Routes
