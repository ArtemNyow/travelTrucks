import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <div className={css.headerWrapper}>
          <Link href="/" className={css.logo}>
            <svg className={css.iconlogo} width={136} height={16}>
              <use href="/logo.svg"></use>
            </svg>
          </Link>
          <ul className={css.list}>
            <li className={css.listItem}>
              <Link href="/" className={css.itemText}>
                Home
              </Link>
            </li>
            <li className={css.listItem}>
              <Link href="/catalog" className={css.itemText}>
                Catalog
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
