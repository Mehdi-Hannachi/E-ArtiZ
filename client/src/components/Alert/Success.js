import React from "react";
import { Alert, Container } from "reactstrap";

const Success = ({ msg }) => {
  const [alert, setAlert] = React.useState(true);

  return (
    <Alert color="success" isOpen={alert}>
      <Container>
        <div className="alert-icon">
          <i className="now-ui-icons ui-2_like"></i>
        </div>
        <strong>Well done!</strong> {msg}
        <button type="button" className="close" onClick={() => setAlert(false)}>
          <span aria-hidden="true">
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </span>
        </button>
      </Container>
    </Alert>
  );
};

export default Success;
