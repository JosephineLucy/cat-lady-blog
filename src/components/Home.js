import BlogList from "./BlogList";
import useFetch from "../useFetch";
import Cat from "./Cat";
import { useState } from "react";

const Home = () => {
  const [selected, setSelected] = useState(null);

  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const cats = [
    {
      name: "Harry",
      id: 1,
      information: "Tabby cat. Very energetic and intelligent.",
    },
    {
      name: "Rupert",
      id: 2,
      information: "Long haired black cat. Very glamorous and chilled out.",
    },
    { name: "Nova", id: 3, information: "Siamese cat. Very shy and pretty" },
  ];

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {cats.map((cat) => (
        <Cat
          name={cat.name}
          id={cat.id}
          information={cat.information}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default Home;
