import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { MessageIcon, InboxIcon, SearchIcon } from '~/components/icons';
import { PopperWrapper } from '~/components/Layout/Popper';
import { AccountItem } from '~/components/Layout';

const cx = classNames.bind(styles);

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
                    <MessageIcon lassName={cx('msg-icon')}></MessageIcon>
                    <InboxIcon lassName={cx('inbox-icon')}></InboxIcon>
                    <img className={cx('no-image')} src={images.noImage} alt="ảnh"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;
