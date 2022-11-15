import close from "../component/img/close.png";
const Wallet = (props) => {
  return (
    <div className="Wallet-box">
      <div className="box">
        <div className="closeopen">
          <h1> Connect wallet</h1>
          <span className="close-icon" onClick={props.handleClose}>
            <img src={close} alt="x" />
          </span>
        </div>
        <hr />
        {props.content}
      </div>
    </div>
  );
};

export default Wallet;
