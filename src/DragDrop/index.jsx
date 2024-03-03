import React, { useEffect, useState } from "react";
import TextInput from "../Components/TextInput";
import TextArea from "../Components/TextArea";
import { MdOutlineTextRotationNone } from "react-icons/md";
import { MdOutlineTextRotateVertical } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import DropDown from "../Components/DropDown";
import { IoIosArrowDropdown } from "react-icons/io";

const COMPONENT_MAPPING = {
  textInput: TextInput,
  textArea: TextArea,
  dropDown: DropDown,

};

const DragDrop = () => {
  const [draggedList, setDraggedList] = useState([]);

  const listItems = [
    { id: "textInput", label: "Text Input" },
    { id: "textArea", label: "Text Area" },
    { id: "dropDown", label: "Select" },

  ];
  const [isDragging, setIsDragging] = useState(false);
  const [list, setList] = useState(listItems);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("id", event.currentTarget.id);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    const item = list.find((x) => x.id == id);
    if (item) {
      setDraggedList([...draggedList, item]);
      setIsDragging(false);
    }
  };

  const targetClassName = `flex flex-col flex-1 gap-4 w-full min-w-[20rem]   ${
    isDragging ? "border-black" : "border-indigo-300"
  }`;

  const handleDelete = (id) => {
    console.log({id , draggedList});
    const deleteInput = draggedList.filter((item) => id != item.id );
    setDraggedList(...draggedList, deleteInput);
  };

  return (
    <div className="  border w-screen h-screen mx-auto overflow-auto flex gap-12 px-12 pt-4 ">
      <div className="  flex flex-col flex-1 gap-4 w-full max-w-xs min-w-[20rem]">
        {/* {source} */}
        <h1 className="text-2xl  text-center">Tool Box</h1>
        <ul className="list-none p-0 m-0 min-h-40">
          {list.map((item) => {
            return (
              <li
                key={item.id}
                id={item.id}
                className="bg-white border border-indigo-300 p-4 mb-2 cursor-move m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center"
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.id == "textInput" ? (
                  <span
                    style={{
                      fontSize: "20px",
                      paddingTop: "4px",
                      marginRight: "2px",
                    }}
                  >
                    <MdOutlineTextRotationNone />
                  </span>
                ) : item.id == "textArea" ? (
                  <span
                    style={{
                      fontSize: "20px",
                      paddingTop: "4px",
                      marginRight: "2px",
                    }}
                  >
                    <MdOutlineTextRotateVertical />
                  </span>
                ) :  item.id == "dropDown" ? (
                    <span
                      style={{
                        fontSize: "20px",
                        paddingTop: "4px",
                        marginRight: "2px",
                      }}
                    >
                     <IoIosArrowDropdown />
                    </span>
                  ) :

                 null}
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={targetClassName}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* target */}
        <div class="flex justify-between items-center">
          <h1 class="text-2xl">React Form Builder</h1>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Preview
          </button>
        </div>

        <div className="h-screen w-full bg-gray-200 drop-shadow-lg mt-4 p-7 flex flex-col gap-4">
          <div className="text-center p-10 border-2 border-dashed border-slate-400 rounded-md">
            <ul className="list-none p-0 m-0 ">
              {draggedList.length == 0 ? (
                <h1 className="text-xl text-slate-500">Dropzone</h1>
              ) : (
                draggedList.map((item) => {
                  console.log(item);
                  const Component = COMPONENT_MAPPING[item.id];
                  return (
                    <li
                      key={item.id}
                      id={item.id}
                      className="bg-white border rounded p-4 mb-2 cursor-move flex flex-row group"
                    >
                      <Component />
                      <span
                        style={{
                            fontSize: "20px",
                            paddingTop: "4px",
                            marginRight: "2px",
                          }}
                        className="ml-2 cursor-pointer invisible group-hover:visible"
                        onClick={() => handleDelete(item.id)}
                      >
                        <RiDeleteBinLine />
                      </span>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
