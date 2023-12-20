function MainProps({ title, author, year }) {
  return (
    <div>
      <div className="myContainer my-[50px] hover:shadow-md py-3 mx-auto justify-between px-10">
        <h2 className="text-[#f1356d] text-xl font-bold">{title}</h2>
        <p>Written by {author}</p>
        <p>Year: {year}</p>
      </div>
    </div>
  );
}

export default MainProps;
