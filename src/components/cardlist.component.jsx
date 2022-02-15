import Card from "./card.component";

const CardList = ({ users }) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <Card
            key={i}
            name={`${user.firstName} ${user.lastName}`}
            email={user.email}
            picture={user.picture}
          />
        );
      })}
    </>
  );
};

export default CardList;
