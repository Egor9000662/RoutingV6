import style from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Post({ item }) {
  const { title, id } = item;
  return (
    <Link to={`/about/${id}`} >
      <div className={style.wrapper_post}>
        <h1>{id}</h1>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
