import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { puplicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {puplicRoutes.map((routes, index) => {
                        const Page = routes.component;
                        // let Layout = routes.type === null ? Fragment : DefaultLayout;
                        let Layout = DefaultLayout;
                        if (routes.type === null) {
                            Layout = Fragment;
                        } else if (routes.type) {
                            Layout = routes.type;
                        }

                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
