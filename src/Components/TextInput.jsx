import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";

function TextInput() {
  const [inputValue, setInputValue] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Placeholder");
  const [label, setLabel] = useState("Label");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }
 
  

  return (
    <div className="flex flex-row flex-1 justify-between">
      <Modal
        showModal={isModalOpen}
        modalData={modalData}
        setLabel={setLabel}
        label={label}
        placeHolder={placeHolder}
        setPlaceHolder={setPlaceHolder}
        hideModal={closeModal}
      />
      <div className="flex flex-col  flex-1 ">
        <label className="text-base ml-2">{label}</label>
        <input
          className="border pl-2 p-1  rounded-full width mt-2 "
          placeholder={placeHolder}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
      </div>
      <span
        className="cursor-pointer"
        onClick={() => {
          setModalData();
          openModal();
        }}
      >
        Edit
      </span>
    </div>
  );
}

export default TextInput;
