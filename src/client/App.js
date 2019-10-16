import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

const loadData = store => {
    return store.dispatch(fetchCurrentUser());
};

export default {
    loadData: loadData,
    component: App
};
