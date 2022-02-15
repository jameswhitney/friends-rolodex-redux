const Card = () => {
  return (
    <div className="tc grow bg-washed-blue br3 pa3 ma2 dib bw2 shadow-5">
      <img
        className="br-100 h4 w4 dib ba b--black-05 pa2"
        alt="User"
        src={`https://robohash.org/test&size=200x200`}
      />
      <h3 className="f3 mb2">Name Holder</h3>
      <p className="f5 fw4 gray mt0">Email Holder</p>
    </div>
  );
};

export default Card;
