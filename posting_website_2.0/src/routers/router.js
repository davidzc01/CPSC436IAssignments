import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
 
const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddBook} />
                <Route path="/book/:id" component={EditBook} />
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;