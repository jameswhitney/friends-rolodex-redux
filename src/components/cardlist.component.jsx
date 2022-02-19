import Card from "./card.component";

const CardList = ({ users }) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <Card
            key={i}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            picture={user.picture.large}
          />
        );
      })}
    </>
  );
};

export default CardList;
