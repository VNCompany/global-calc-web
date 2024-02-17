import styles from "./FlatButton.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FlatButton({children, className, onClick, disabled}) {
    return (
        <button className={cx("flatButton", className)}
                onClick={onClick}
                disabled={disabled}>
            {children}
        </button>
    );
}