import React, { useEffect, useRef } from "react";

export const Modal = ({
  modalData = {},
  showModal = false,
  setLabel = () => {},
  setPlaceHolder = () => {},
  placeHolder,
  label = "",
  hideModal = () => {},
}) => {
  const modalRef = useRef(null);
 console.log(placeHolder)
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      hideModal();
    }
  };

  const handleChange = () => {

  }

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div>
      {showModal ? (
        <div>
          <div className="fixed inset-0 z-50  flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div
              ref={modalRef}
              className="relative w-[500px] h-[200px] bg-gray-300 rounded p-10   leading-[2rem]"
            >
              <div className="modal-content">
                <button
                  className="absolute top-0 right-0 mt-4 mr-4 text-2xl cursor-pointer"
                  onClick={() => {
                    hideModal();
                  }}
                >
                  &times;
                </button>
                <h2 className="text-lg font-bold mb-4 underline">Edit</h2>
                <div className="flex flex-row justify-between  gap-4">
                  <label htmlFor="">Change Placeholder</label>
                  <input className="w-3/6 border rounded pl-3"
                    value={placeHolder}
                    onChange={(e) => {
                        setPlaceHolder(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-row justify-between  gap-4 mt-5">
                  <label >Change Label</label>
                  <input className="w-3/6 border rounded pl-3 "
                    value={label}
                    onChange={(e) => {
                      setLabel(e.target.value);
                    }}
                  />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showModal && <div className="fixed inset-0 z-40 bg-black opacity-50" />}
    </div>
  );
};
