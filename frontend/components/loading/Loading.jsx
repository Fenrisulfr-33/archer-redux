import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={style.loader}>
      <div className={style.pill}>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
      </div>
    </div>
  );
}
