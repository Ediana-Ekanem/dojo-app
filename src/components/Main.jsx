import Data from "../data";
import MainProps from "./MainProps";

const creatNewBlogs = (item) => {
  return (
    <MainProps
      key={item.id}
      title={item.title}
      author={item.author}
      year={item.year}
    />
  );
};

function Main() {
  return <div>{Data.map(creatNewBlogs)}</div>;
}

export default Main;
