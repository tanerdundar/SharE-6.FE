function List(props) {
  const data = [
    {
      id: 1,
      text: "Devpulse",
    },
    {
      id: 2,
      text: "Linklinks",
    },
    {
      id: 3,
      text: "Centizu",
    },
    {
      id: 4,
      text: "Dynabox",
    },
    {
      id: 5,
      text: "Avaveo",
    },
    {
      id: 6,
      text: "Demivee",
    },
    {
      id: 7,
      text: "Jayo",
    },
    {
      id: 8,
      text: "Blognation",
    },
    {
      id: 9,
      text: "Podcat",
    },
    {
      id: 10,
      text: "Layo",
    },
  ];
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul className="ullll">
      {filteredData.map((item) => (
        <li className="ullll" key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default List;
