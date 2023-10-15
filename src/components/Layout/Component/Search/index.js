import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { MessageIcon, InboxIcon, SearchIcon } from '~/components/icons';
import styles from './Search.module.scss';
import useDebounce from '~/hooks/useDebounce';
const cx = classNames.bind(styles);

function Search() {
    const [searchValueInput, setSearchValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [focusInput, setFocusInput] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValueInput, 500);

    useEffect(() => {
        if (!searchValueInput.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced]);

    const handleClear = () => {
        setSearchValueInput('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <Tippy
            visible={focusInput && searchResult.length > 0}
            onClickOutside={() => setFocusInput(false)}
            interactive
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('header')}>Account</h4>
                        {searchResult.map((dataApi) => (
                            <AccountItem key={dataApi.id} data={dataApi}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    value={searchValueInput}
                    ref={inputRef}
                    className={cx('search-input')}
                    placeholder="Search videos"
                    onChange={(e) => setSearchValueInput(e.target.value)}
                    onFocus={() => setFocusInput(true)}
                ></input>

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                {searchValueInput && !loading && (
                    <button onClick={handleClear}>
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                    </button>
                )}

                <button className={cx('search-btn')}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
