// import React, { useState } from "react";
// import "./styles.css";

// function App() {
//   const list = [
//     "Banana",
//     "Apple",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Watermelon"
//   ];

//   const [filterList, setFilterList] = useState(list);

//   const handleSearch = (event) => {

//     if (event.target.value === "") {
//       setFilterList(list);
//       return;
//     }
//     const filteredValues = list.filter(
//       (item) =>
//         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//     );
//     setFilterList(filteredValues);
//   };
//   return (
//     <div className="app">
//       <div>
//         Search: <input name="query" type="text" onChange={handleSearch} />
//       </div>
//       {filterList &&
//         filterList.map((item, index) => (
//           <div key={index}>{item}</div> //Display each item
//         ))}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./styles.css";
import Select from "react-select";

export default function App() {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();
  // Array of all options
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];
  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return(
    <div className="app">
      <h2>Choose your color</h2>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}