import React from 'react';
import {BaseLayout} from "./layouts/baseLayout";
import {Home} from "./pages/Home";
import {MovieDetails} from "./pages/MovieDetails";
import {Switch, Route} from "react-router-dom";

export default function App() {

    return (
        <div>
            <BaseLayout>
                <Switch>
                    <Route path='/' exact>
                        <Home/>
                    </Route>

                    <Route path='/movie/:id'>
                        <MovieDetails/>
                    </Route>
                </Switch>
            </BaseLayout>
        </div>
    );
}
