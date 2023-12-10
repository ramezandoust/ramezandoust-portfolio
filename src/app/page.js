import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Image className={styles.mypic} src="/ramezandoust.jpeg" alt="ramezandoust" width={400} height={400} />
        </div>

        <div className={styles.col}>
          <h1>ابوالفضل رمضان دوست</h1>
          <p>طراح وب سایت و توسعه دهنده فرانت اند</p>
        </div>
      </div>
    </main>
  );
}
