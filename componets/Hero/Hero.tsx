import Link from "next/link";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.hero}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <h2 className={css.heroText}>
          You can find everything you want in our catalog
        </h2>
        <Link href="/catalog" className={css.btnHero}>
          View Now
        </Link>
      </div>
    </section>
  );
}
