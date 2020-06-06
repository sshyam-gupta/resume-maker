import { useState, useRef } from "react";
import Editable from "../components/Editable/Editable";

const IndexPage = () => {
  const [description, setDescription] = useState("");
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  const textareaRef = useRef(null);


  return (
    <div className="w-full max-w-md mx-auto">
    <form className=" bg-white rounded px-8 py-8 pt-8">

          <div className="px-4 pb-4">

      <Editable
        text={task}
        placeholder="Write a task name"
        type="input"
        childRef={inputRef}
      >
        <input
          ref={inputRef}
          type="text"
          name="task"
          placeholder="Write a task name"
          value={task}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          onChange={e => setTask(e.target.value)}
        />
      </Editable>
      </div>
      <div className="px-4 pb-4">

      <Editable
        text={description}
        placeholder="Description for the task"
        type="textarea"
        childRef={textareaRef}
      >
        <textarea
          name="description"
          ref={textareaRef}
          placeholder="Description for the task"
          rows={5}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Editable>
      </div>
      </form>
    </div>

  )
};

export default IndexPage;
