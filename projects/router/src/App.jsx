import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const SearchPage = lazy(() => import("./pages/Search"));
const Page404 = lazy(() => import("./pages/404"));

import Router from "./Router";
import Route from "./Route";

const routes = [
    {
        path: "/:lang/about",
        Component: AboutPage
    },
    {
        path: "/search/:query",
        Component: SearchPage
    }
];

function App() {
    return (
        <main>
            <Suspense>
                <Router routes={routes} defaultComponent={Page404}>
                    <Route path="/" Component={HomePage} />
                    <Route path="/about" Component={AboutPage} />
                </Router>
            </Suspense>
        </main>
    );
}

export default App;
