import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

const puplicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/search',
        component: Search,
        type: null,
    },
    {
        path: '/upload',
        component: Upload,
        type: HeaderOnly,
    },
];

const privateRoutes = [];

export { puplicRoutes, privateRoutes };
