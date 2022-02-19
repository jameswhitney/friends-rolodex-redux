// Individual Card component
// Displays random photo, name, and email
// Imported within CardList to create array of
// Cards to be rendered

const Card = ({ name, email, picture }) => {
  return (
    <div className="tc grow bg-white-80 pa2 br3 ma2 dib bw2 shadow-5">
      <img
        className="br-100 bg-black-70 h4 w4 dib ba b--black-05 pa1"
        alt="User"
        src={`${picture}`}
      />
      <h3 className="f4">{name}</h3>
      <p className="f6 fw4 gray mt0">{email}</p>
    </div>
  );
};

export default Card;
