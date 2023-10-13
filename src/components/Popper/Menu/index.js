import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { PopperWrapper } from '..';
import DataMenuItems from './DataMenuItems';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);

    const currentArr = history[history.length - 1];
    const renderItems = () =>
        currentArr.data.map((item, index) => (
            <DataMenuItems
                key={index}
                data={item}
                onClick={() => {
                    if (item.children) {
                        setHistory((prev) => [...prev, item.children]);
                    }
                }}
            ></DataMenuItems>
        ));

    return (
        <HeadlessTippy
            offset={[12, 10]}
            visible
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper')}>
                        {history.length > 1 && (
                            <h4
                                onClick={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            >
                                Language
                            </h4>
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default MenuItem;
