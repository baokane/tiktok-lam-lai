import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCircleXmark,
    faEarthOceania,
    faEllipsisVertical,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { MessageIcon, InboxIcon, SearchIcon } from '~/components/icons';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import MenuItem from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

let currentValue = true;

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

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="logo"></img>
                <Tippy
                    visible
                    interactive
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('header')}>Account</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input className={cx('search-input')} placeholder="Search videos"></input>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />

                        <button className={cx('search-btn')}>
                            <SearchIcon></SearchIcon>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    {currentValue ? (
                        <>
                            <Button primary lefticon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}>
                                Log in
                            </Button>
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
                            <MessageIcon lassName={cx('msg-icon')}></MessageIcon>
                            <InboxIcon lassName={cx('inbox-icon')}></InboxIcon>
                            <img className={cx('no-image')} src={images.noImage} alt="ảnh"></img>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
