import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.head}>
                <div><img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png"/></div>
                <div className={s.loginBlock}>ссылка</div>
            </div>
        </header>
    );
}

export default Header;