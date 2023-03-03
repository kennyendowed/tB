import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./terms.css"


const Terms = ({ showTerm, handleClose }) => {
//export default function Terms({ showTerm, handleClose }) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onCpck={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={showTerm}
        onHide={handleClose}
        // style={{ height: "90vh", margin: "20px" }}
      >
        <Modal.Header closeButton style={{ justifyContent: "center" }}>
          <Modal.Title style={{ color: "#efb331" }}>Terms and Condition</Modal.Title>
     
        </Modal.Header>
        <Modal.Body style={{ padding: "20px" }}>
          
          <div style={{fontFamily:"garamond"}}>
          <p>Welcome to Trust Bank! By opening an account with us, you agree to the following terms and conditions:</p><hr />

         <p> 1. Account Opening: To open an account with Trust Bank, you must provide accurate personal information and complete all required documentation. We reserve the right to decline your account opening request at our discretion..</p>
         <p>2. Account Ownership: You are the sole owner of your account with Trust Bank. Joint accounts can be opened with the consent of all parties involved.</p>
         <p>3.Account Transactions: You can deposit and withdraw funds from your account, subject to applicable fees and transaction limits. We may place holds on certain deposits in accordance with our policies.</p>
         <p>4. Fees and Charges: Trust Bank reserves the right to charge fees for its products and services. We will provide you with a schedule of fees upon account opening, and may update this schedule from time to time.</p>
         <p>5. Online Banking: Trust Bank offers online banking services, which you can access through our website or mobile app. By using our online banking services, you agree to abide by the terms and conditions set forth in our online banking agreement.</p>
         <p>6. Security: You are responsible for maintaining the security of your account information, including your account number, username, and password. Trust Bank will not be liable for any unauthorized transactions resulting from your failure to secure your account information.</p>
         <p>7. Termination: Trust Bank reserves the right to terminate your account at any time, without notice or reason. You may also close your account at any time, subject to applicable fees and requirements.</p>
        <hr/>
        <p>By opening an account with Trust Bank, you acknowledge that you have read, understood, and agree to these terms and conditions.</p>


            </div>
        </Modal.Body>
{/* 
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button
            variant="secondary"
            onClick={() => Action(false)}
            style={{
              backgroundColor: "red",
              width: "30%",
              height: "50px",
            }}
          >
            Decline
          </Button>
          <Button
            variant="primary"
            onClick={() => Action(true)}
            style={{
              backgroundColor: "green",
              width: "30%",
              height: "50px",
            }}
          >
            Accept
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Terms;
