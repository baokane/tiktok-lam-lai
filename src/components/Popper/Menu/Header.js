import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ children, onBack }) {
    return (
        <div className={cx('wrapper-header')} onClick={onBack}>
            <FontAwesomeIcon className={cx('arrow-icon')} icon={faChevronLeft} />
            <h4 className={cx('title')}>{children}</h4>
        </div>
    );
}

export default Header;
