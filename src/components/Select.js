import React, { useState } from "react";

function Select({ data }) {
  const [curSelect, setCurSelect] = useState("North");

  function HandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className='add-form' onSubmit={HandleSubmit}>
      <h2>Which path in Thailand you want to go ?</h2>
      <select
        value={curSelect}
        onChange={(e) => {
          const selectPath = e.target.value;
          setCurSelect(selectPath);
        }}
      >
        <option value='North'>North of Thailand</option>
        <option value='Central'>Central of Thailand</option>
        <option value='West'>West of Thailand</option>
        <option value='East'>East of Thailand</option>
        <option value='South'>South of Thailand</option>
      </select>

      <button>Select</button>
    </form>
  );
}

export default Select;
