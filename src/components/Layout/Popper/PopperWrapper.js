import classNames from 'classnames/bind';
import styles from './PopperWrapper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('header')}>Account</h4>
            {children}
        </div>
    );
}

export default Popper;
