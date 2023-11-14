import Styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "danger" | "success" | "secondary";
  onClick: () => void;
}

const Button = ({ color = "danger", children, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={[Styles.btn, Styles["btn-" + color]].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
