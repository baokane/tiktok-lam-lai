import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function DataMenuItems({ data, onClick }) {
    return (
        <div className={cx('wrapper__menu')} onClick={onClick}>
            {data.icon && <div className={cx('icon')}>{data.icon}</div>}
            <div className={cx('message')}>{data.title}</div>
        </div>
    );
}

export default DataMenuItems;
