const Cat = ({ name, id, information, selected, setSelected }) => {
  console.log(selected, "<<<selected");
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setSelected(id)}>More info</button>
      {selected === id && <p>{information}</p>}
    </div>
  );
};

export default Cat;
