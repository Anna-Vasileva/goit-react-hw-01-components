// import { shape } from "prop-types";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={s[isOnline]}></span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
};

export default FriendListItem;
