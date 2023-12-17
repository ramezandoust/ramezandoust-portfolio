import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sec1}>
        <div className={`${styles.col} ${styles.mainAvatar}`}>
          <Image className={styles.starRotate} src="/star-rotate.png" alt="star" width={420} height={390} priority />
          <Image className={styles.mypic} src="/ramezandoust.jpg" alt="ramezandoust" width={350} height={350} />
        </div>

        <div className={styles.col}>
          <h1>ابوالفضل رمضان دوست</h1>
          <p>طراح وب سایت و توسعه دهنده فرانت اند</p>
        </div>
      </div>
    </main>
  );
}
