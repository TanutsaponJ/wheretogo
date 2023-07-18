import React from "react";
import ContentList from "./ContentList";

function Content({ data }) {
  return (
    <div className='list'>
      {data.map((el, index) => (
        <ContentList
          num={index}
          name={el.name}
          img={el.image}
          position={el.position}
          information={el.information}
          key={el.id}
        />
      ))}
    </div>
  );
}

export default Content;
