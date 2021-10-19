const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`position-fixed toast align-items-center text-white bg-${bgColor} border-0 show`}
      role="alert"
      aria-live="assertive"
      data-autohide
      style={{ right: 10, top: 100 }}
    >
      <div>
        <div className="toast-header">
          <strong className="mr-auto">{msg.title}</strong>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto bg-info"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={handleShow}
          ></button>
        </div>
        <div className="toast-body">{msg.msg}</div>
      </div>
    </div>
  );
};

export default Toast;
