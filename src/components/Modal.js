import "./Modal.css";

export default function Modal({ children, isSalesModal }) {
  return (
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          textAlign: "center",
          borderColor: isSalesModal ? "#ff4500" : "#555",
        }}
      >
        {children}
      </div>
    </div>
  );
}
