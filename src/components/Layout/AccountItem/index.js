import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <div className={cx('menu')}>
                <img
                    className={cx('image')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/3927/63da2f11ce330.jpg"
                    alt="ảnh"
                ></img>
                <div className={cx('info')}>
                    <div className={cx('name')}>Name</div>
                    <div className={cx('usename')}>UseName</div>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
