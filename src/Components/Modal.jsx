import React, { useEffect, useRef } from "react";

export const Modal = ({
  unique,
  modalData = {},
  showModal = false,
  setLabel = () => {},
  setPlaceHolder = () => {},
  placeHolder,
  option,
  setOption = () => {},
  label = "",
  hideModal = () => {},
}) => {
  const modalRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      hideModal();
    }
  };

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

  const modalHeight = `relative w-[500px] h-[200px] bg-gray-300 rounded p-10   leading-[2rem] ${
    unique == "select" ? "h-[500px]" : "h-[200px]"
  }`;

  return (
    <div>
      {showModal ? (
        <div>
          <div className="fixed inset-0 z-50  flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div ref={modalRef} className={modalHeight}>
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
                {/* <div className="flex flex-row justify-between  gap-4">
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
                </div> */}

                {unique == "textInput" ? (
                  <div>
                    {" "}
                    <div className="flex flex-row justify-between  gap-4">
                      <label htmlFor="">Change Placeholder</label>
                      <input
                        className="w-3/6 border rounded pl-3"
                        value={placeHolder}
                        onChange={(e) => {
                          setPlaceHolder(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex flex-row justify-between  gap-4 mt-5">
                      <label>Change Label</label>
                      <input
                        className="w-3/6 border rounded pl-3 "
                        value={label}
                        onChange={(e) => {
                          setLabel(e.target.value);
                        }}
                      />
                    </div>{" "}
                  </div>
                ) : unique == "select" ? (
                  <div>
                    <div className="flex flex-row justify-between  gap-4 mt-5">
                      <label>Change Label</label>
                      <input
                        className="w-3/6 border rounded pl-3 "
                        value={label}
                        onChange={(e) => {
                          setLabel(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <table class="border-collapse">
                        <thead>
                          <tr class="text-left p-2">
                            <th class="w-[11rem] p-2">Options</th>
                            <th class="w-[11rem] p-2">Value</th>
                            <th class="p-2"></th>
                            <th class="p-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="p-2">
                            <td class="p-2">
                              <input
                                type="text"
                                class="w-full p-1 border rounded outline-none focus:border-slate-600"
                                value={option}
                              />
                            </td>
                            <td class="p-2">
                              <input
                                type="text"
                                class="w-full p-1 border rounded outline-none focus:border-slate-600"
                                value={setOption()}
                              />
                            </td>
                            <td class="p-2 w-5">
                              <button class="bg-green-500 p-1 rounded-sm hover:bg-green-600 transition-all">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  class="text-gray-100"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </td>
                            <td class="p-2 w-5"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showModal && <div className="fixed inset-0 z-40 bg-black opacity-50" />}
    </div>
  );
};
