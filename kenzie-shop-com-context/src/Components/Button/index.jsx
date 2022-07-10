export const Button = ({ children, ...rest }) => {
  return (
    <div>
      <button {...rest}>{children}</button>
    </div>
  );
};
export default Button;
