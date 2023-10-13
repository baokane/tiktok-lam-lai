import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    onClick,
    to,
    href,
    primary,
    rounded,
    outline,
    text,
    disable,
    small,
    large,
    className,
    lefticon = false,
    righticon = false,
}) {
    let Comp = 'button';

    const props = { onClick };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {
        primary,
        rounded,
        outline,
        text,
        disable,
        small,
        large,
        [className]: className,
        lefticon,
        righticon,
    });

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('left-icon')}>{lefticon}</span>}
            {<span className={cx('title')}>{children}</span>}
            {righticon && <span className={cx('right-icon')}>{righticon}</span>}
        </Comp>
    );
}

export default Button;
