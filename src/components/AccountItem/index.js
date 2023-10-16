import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('menu')}>
            <Image className={cx('image')} src={data.avatar} alt="ảnh"></Image>
            <div className={cx('info')}>
                <div>
                    <span className={cx('name')}>{data.full_name}</span>
                    {data.tick && (
                        <span>
                            <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                        </span>
                    )}
                </div>
                <div className={cx('usename')}>{data.nickname}</div>
            </div>
        </Link>
    );
}

export default AccountItem;
