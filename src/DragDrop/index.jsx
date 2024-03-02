import React, { useEffect, useState } from "react";
import TextInput from "../Components/TextInput";


const COMPONENT_MAPPING = {
  textInput: TextInput,
};

const DragDrop = () => {
  const [draggedList, setDraggedList] = useState([]);
 
  
  const listItems = [
    { id: "textInput", label: "Text Input" },
    { id: "textArea", label: "Text Area" },
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

  const targetClassName = ` basis-1/2 mt-4 p-4 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
    isDragging ? "border-black" : "border-indigo-300"
  }`;

  const handleDelete = (id) => {
   draggedList.splice((id)=> id==id );

  }

  useEffect(() => {
   
   }, [draggedList])

  return (
    <div className=" content-center m-8 border  flex flex-nowrap flex-row gap-14  width mb-6">
      <div className=" basis-1/3 p-4 mt-5 bg-white rounded-lg shadow-lg flex flex-col flex-1 gap-4 w-full max-w-xs min-w-[20rem]">
        {/* {source} */}
        <h1 className="text-2xl  text-center text-slate-400 pb-6">Tool Box</h1>
        <ul className="list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40">
          {list.map((item) => {
            return (
              <li
                key={item.id}
                id={item.id}
                className="bg-white border border-indigo-300 p-4 mb-2 cursor-move m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center"
                draggable={true}
                onDragStart={handleDragStart}
              >
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
        <p>Drag Drop here</p>
        <ul className="list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40">
          {draggedList.map((item) => {
            console.log(item);
            const Component = COMPONENT_MAPPING[item.id];
            return (
              <li
                key={item.id}
                id={item.id}
                className="bg-white border border-indigo-300 p-4 mb-2 cursor-move flex flex-row  "
              >
                <Component />
                <span className="ml-2 cursor-pointer"  onClick= {() => handleDelete(item.id)}>Delete</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DragDrop;
