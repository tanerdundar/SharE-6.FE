function Numbers(props) {
  return (
    <div className="number-inside">
      <div className="number">{props.number}</div>
      <div className="description">{props.text}</div>
    </div>
  );
}

export default Numbers;
