import PropTypes from "prop-types";
import styles from "../toDoList.module.css";
import { Search, Sorting } from "./components";

export const ControlPanel = ({ onTodoAdd }) => {
    return (
        <div className={styles.controlPanel}>
            <Search />
            <Sorting />
            <button
                className={styles.btn}
                onClick={onTodoAdd}
            >
                ✚
            </button>
        </div>
    );
};

ControlPanel.propTypes = {
    onTodoAdd: PropTypes.func,
};
