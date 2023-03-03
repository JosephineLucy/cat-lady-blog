import { useState } from "react";

const Buttons = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <button onClick={() => setSelected(1)}>Item 1</button>
      {selected === 1 ? <p>Item 1 information</p> : null}
      <br></br>
      <button onClick={() => setSelected(2)}>Item 2</button>
      {selected === 2 ? <p>Item 2 information</p> : null}
      <br></br>
      <button onClick={() => setSelected(3)}>Item 3</button>
      {selected === 3 ? <p>Item 3 information</p> : null}
    </div>
  );
};

export default Buttons;
