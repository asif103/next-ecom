import { useContext } from "react";
import { DataContext } from "../store/GlobalState";

import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;
  return (
    <div>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ msg: notify.error, title: "Error" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="danger"
        />
      )}
      {notify.success && (
        <Toast
          msg={{ msg: notify.success, title: "Success" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="success"
        />
      )}
    </div>
  );
};

export default Notify;
