import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthOceania,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { MessageIcon, InboxIcon, SearchIcon } from '~/components/icons';
import Button from '~/components/Button';
import MenuItem from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const menuData = [
    {
        icon: <FontAwesomeIcon icon={faEarthOceania} />,
        title: 'English',
        children: {
            data: [
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'Tiếng Anh',
                },
                {
                    title: 'Tiếng Ý',
                },
                {
                    title: 'Tiếng Nhật',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
    },
    ...menuData,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        separate: 'separate',
    },
];

function Header() {
    let currentValue = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="logo"></img>

                <Search></Search>

                <div className={cx('action')}>
                    {
                        (currentValue = false ? (
                            <>
                                <Button primary>Upload</Button>
                                <Button
                                    rounded
                                    className={cx('testclass')}
                                    righticon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
                                >
                                    Log in
                                </Button>

                                <MenuItem items={menuData}>
                                    <button className={cx('action__list-icon')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                </MenuItem>
                            </>
                        ) : (
                            <>
                                <MessageIcon className={cx('msg-icon')}></MessageIcon>
                                <button className={cx('inbox-icon')}>
                                    <InboxIcon></InboxIcon>
                                </button>
                                <MenuItem items={userMenu}>
                                    <Image
                                        className={cx('no-image')}
                                        src={
                                            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
                                        }
                                        alt="ảnh"
                                        fallback="https://static2.sodepami.vn/source/sim-tu-quy-2.png"
                                    ></Image>
                                </MenuItem>
                            </>
                        ))
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
