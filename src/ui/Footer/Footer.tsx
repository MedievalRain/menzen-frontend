import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.mailto} href="mailto:medievalrain@medievalrain.net">
        MedievalRain
      </a>
      <span>&nbsp; · 2023</span>
    </footer>
  );
}

export default Footer;
