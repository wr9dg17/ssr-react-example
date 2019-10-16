import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "./client/routes";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";
const app = express();

app.use(express.static("public"));

// Second argument of proxy function is optional
app.use("/api", proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(options) {
        options.headers["x-forwarded-host"] = "localhost:3000";
        return options;
    }
}));

app.get("*", (req, res) => {
    const store = createStore(req);

    // Some logic to initialize and load data into the store
    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        // Checking if on "client side" user is redurected
        // if so, we also redirectiong user in "server side"
        // in case javascript is disabled on browser
        if (context.url) {
            return res.redirect(301, context.url);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
