const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

export default FriendListItem;
