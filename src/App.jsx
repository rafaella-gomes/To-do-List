import { useState } from "react";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Task />
      <main></main>
    </div>
  );
}
