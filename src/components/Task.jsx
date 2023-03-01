import styles from "./Task.module.css";
import Clipboard from "../assets/Clipboard.svg";
import trash2 from "../assets/trash2.svg";
import { useState } from "react";

export function Task() {
  const [tasks, setTasks] = useState([]);

  function handleCreateNewTask(event) {
    event.preventDefault();

    const newTaskText = event.target.task.value;
    const newTask = { text: newTaskText, isChecked: false };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    event.target.reset();
  }

  function handleChangeChecked(event, index) {
    const newArray = tasks.map((task, idx) =>
      idx === index ? { text: task.text, isChecked: !task.isChecked } : task
    );

    setTasks(newArray);
  }
  function handleDeleteTask(index) {
    const arrayWithoutDeletedOne = tasks.filter((task, idx) => idx !== index);
    setTasks(arrayWithoutDeletedOne);
  }

  const completedTasks = tasks.filter((task) => task.isChecked).length;
  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.task}>
        <input
          type="text"
          name="task"
          placeholder="Adicione uma nova Tarefa"
          required
        />
        <button type="submit">
          Criar <img src="" alt="" />
        </button>
      </form>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksHeader}>
          <strong>
            <span className={styles.info}>Tarefas criadas</span>
            <span className={styles.tasksNumber}>{tasks.length}</span>
          </strong>
          <strong>
            <span className={styles.infoChecked}>Tarefas concluídas</span>
            <span className={styles.tasksNumber2}>
              {completedTasks + " de " + tasks.length}
            </span>
          </strong>
        </div>

        <div className={styles.boxTasks}>
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task, index) => (
                <div className={styles.divStructure}>
                  <input
                    onChange={(e) => handleChangeChecked(e, index)}
                    type="checkbox"
                    checked={task.isChecked}
                  />
                  <span>{task.text}</span>
                  <button onClick={() => handleDeleteTask(index)}>
                    Deletar
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <div className={styles.cadastredTasks}>
              <img src={Clipboard} />
              <strong className={styles.taskUnRegistered}>
                Você ainda não tem tarefas Cadastradas{" "}
              </strong>
              <span className={styles.createTasks}>
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
}
