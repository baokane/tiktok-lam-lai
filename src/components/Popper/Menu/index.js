import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { PopperWrapper } from '..';
import DataMenuItems from './DataMenuItems';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

function MenuItem({ children, items = [], className }) {
    const [history, setHistory] = useState([{ data: items }]);

    const currentArr = history[history.length - 1];
    const renderItems = () =>
        currentArr.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <DataMenuItems
                    classData={className}
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                ></DataMenuItems>
            );
        });

    return (
        <HeadlessTippy
            offset={[12, 10]}
            delay={[0, 700]}
            placement="bottom-end"
            hideOnClick={false}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            interactive
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('popperwrapper')}>
                        {history.length > 1 && (
                            <Header
                                children="Language"
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            ></Header>
                        )}
                        <div className={cx('wrapper-scroll')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default MenuItem;
