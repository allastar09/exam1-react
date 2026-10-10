import { useState } from "react"
function Todo() {
  const [data, setData] = useState([
    { id: 1, name: "Fasehuddin", status: true },
    { id: 2, name: "Qurbon", status: false },
    { id: 3, name: "Andaleb", status: true },
  ]);

  const [name, oldName] = useState("");
  const [sta, oldSta] = useState(false);
  const [search, oldSearch] = useState('')

  return (
    <div className="mt-[100px] ml-[100px] p-[30px]">
      <div className="flex gap-[30px]">
        <input
          type="text"
          placeholder="Please Add Name User"
          className="w-[200px] border p-[10px] rounded-2xl"
          value={name}
          onChange={(e) => oldName(e.target.value)}
        />

        <select
          className="w-[200px] border p-[10px] rounded-2xl"
          value={sta}
          onChange={(e) => oldSta(e.target.value === "true")}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <input type="searc" className="w-[200px] border rounded-2xl" value={search} onInput={(e)=> oldSearch(e.target.value)} />

        <button
          className="w-[150px] border bg-[green] text-2xl text-white rounded-2xl"
          onClick={() => {
            setData([
              ...data,
              {
                id: Date.now(),
                name: name,
                status: sta,
              },
            ]);

            oldName("");
            oldSta(false);
          }}
        >
          Add
        </button>
      </div>

      <div>
        {data
  .filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  ).map((user) => (
    <div
      key={user.id}
      className="flex gap-5 items-center mt-5 border p-3 rounded-xl"
    >
      <h2>{user.name}</h2>

     <input
  type="checkbox"
  checked={user.status}
  onChange={() => {
    setData(
      data.map((el) => {
        if (el.id === user.id) {
          return { ...el, status: !el.status };
        }
        return el;
      })
    );
  }}
/>

<p>{user.status}</p>

      <button
        className="w-[100px] border bg-[red] text-[white] rounded-[7px]"
        onClick={() =>
          setData(data.filter((el) => el.id !== user.id ))
        }
      >
        Delete
      </button>
    </div>
  ))}
      </div>
    </div>
  );
}

export default Todo;