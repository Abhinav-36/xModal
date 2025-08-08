import "./Modal.css"

export default function Modal({onClose,isOpen,children}){
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };
    return (
        <div className="modal" onClick={handleOverlayClick}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}