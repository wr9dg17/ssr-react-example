import App from "./App";
import Home from "./pages/Home";
import UsersList from "./pages/UsersList";
import AdminsList from "./pages/AdminsList";
import NotFound from "./pages/NotFound";

export default [
    {
        ...App,
        routes: [
            {
                path: "/",
                ...Home,
                exact: true,
            },
            {
                path: "/users",
                ...UsersList,
            },
            {
                path: "/admins",
                ...AdminsList,
            },
            {
                ...NotFound,
            },
        ],
    },
];
