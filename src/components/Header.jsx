import styles from "./Header.module.css";
import todoLogo from "../assets/todoLogo.svg";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <img src={todoLogo} alt="Logotipo do Todo" />
        <h1>todo</h1>
      </div>
    </header>
  );
}
