import { useState } from "react";
import { ProjectManager } from "../Manager/ProjectMnager";
function Add() {
  const values = {
    name: "",
    description: "",
    manager: "",
  };
  const [data, setData] = useState(values);
  const display = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newproj = {
      data: {
        project_description: data.description,
        project_manager: data.manager,
        project_name: data.name,
        project_id: 6,
      },
    };
    console.log("my data", data);
    setData(values);
    ProjectManager.addPro(newproj);
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h2>ADD </h2>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="name">
          Project Name:
        </label>
        <div className="col-sm-10">
          <input
            type="name"
            value={data.name}
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="description">
         Project Description:
        </label>
        <div className="col-sm-10">
          <input
            type="description"
            className="form-control"
            value={data.description}
            name="description"
            onChange={handleChange}
            id="description"
            placeholder="Enter description"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="manager">
        Project Manager:
        </label>
        <div className="col-sm-10">
          <input
            type="manager"
            className="form-control"
            value={data.manager}
          name="manager"
          onChange={handleChange}
            id="manager"
            placeholder="Enter manager"
          />
        </div>
      </div>
      <button onClick={display}>Add</button>
    </div>
  );
}
export default Add;
