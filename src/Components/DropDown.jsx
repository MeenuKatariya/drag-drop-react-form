import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { TiEdit } from "react-icons/ti";

function DropDown() {
  const [option, setOption] = useState("Option1");
  const [label, setLabel] = useState("Label");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [ unique , setUnique ] =  useState("select")
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
    <Modal
     unique = {unique}
      showModal={isModalOpen}
      modalData={modalData}
      setLabel={setLabel}
      label={label}
      option={option}
      setOption={setOption}
      hideModal={closeModal}
    />
    <div className="flex flex-row flex-1 justify-between">
      <div className="flex flex-col flex-1 group">
        <label className="text-base text-left font-semibold ml-2">{label}</label>
        <input
          className="border pl-2 p-1  rounded width mt-2 "
           type="select"
          onChange={(e) => {
            setOption(e.target.value);
          }}
          value={option}
        />
      </div>
      <span
        className="cursor-pointer invisible group-hover:visible"
        style={{
          fontSize: "20px",
          paddingTop: "4px",
          marginRight: "2px",
        }}
        onClick={() => {
          setModalData();
          openModal();
        }}
      >
        <TiEdit />
      </span>
    </div>
  </>
  )
}

export default DropDown

