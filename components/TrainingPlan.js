import { useState } from "react";

export default function TrainingPlan() {
  const [items, setItems] = useState([
    { id: 1, text: "Warm-up + Mobility (15m)" },
    { id: 2, text: "Endurance run (5km)" },
    { id: 3, text: "Stretch + Recovery (10m)" },
  ]);
  const [text, setText] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setItems(prev => [...prev, { id: Date.now(), text }]);
    setText("");
  };

  return (
    <div className="p-5 bg-white rounded-2xl shadow">
      <div className="font-semibold mb-3">Training Plan</div>

      <ul className="space-y-2">
        {items.map(i => (
          <li key={i.id} className="p-3 border rounded-xl">{i.text}</li>
        ))}
      </ul>

      <form onSubmit={add} className="mt-4 flex gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add session (e.g., Sprint drills 6x100m)"
          className="flex-1 px-3 py-2 border rounded-xl"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Add</button>
      </form>
    </div>
  );
}
