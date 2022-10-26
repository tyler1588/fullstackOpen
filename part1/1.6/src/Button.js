const Button = ({ text, id, handleClick }) => (
  <button className="btn" id={id} onClick={(e) => handleClick(e)}>
    {text}
  </button>
);

export default Button;
