import styles from "./Button.module.css";

function Button({ onclick, children, type, disable }) {
  return (
    <>
      <button
        className={type === "previous" ? styles.buttonLeft : styles.buttonRight}
        style={styles.button}
        onClick={onclick}
        disabled={disable}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
