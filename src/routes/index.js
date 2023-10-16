import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import { configRoutes } from '~/config';

const puplicRoutes = [
    {
        path: configRoutes.home,
        component: Home,
    },
    {
        path: configRoutes.following,
        component: Following,
    },
    {
        path: configRoutes.nickname,
        component: Profile,
    },
    {
        path: configRoutes.search,
        component: Search,
        type: null,
    },
    {
        path: configRoutes.upload,
        component: Upload,
        type: HeaderOnly,
    },
];

const privateRoutes = [];

export { puplicRoutes, privateRoutes };
