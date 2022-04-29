import React from "react";
import Search from "./Searchbtn.jsx";
// import { Table } from 'react-bootstrap';

function Document() {
  return (
    <div className="document-page">
      <h2>Document page</h2>
      <form className="documentform">
        <select className="documentform-week">
          <option value="week1">week1</option>
          <option value="week2">week2</option>
          <option value="week3">week3</option>
          <option value="week4">week4</option>
        </select>
        <select className="documentform-name">
          <option value="instructor">instruntors</option>
          <option value="student">students</option>
        </select>
        <input type="url" placeholder="URL here" />
        <input type="submit" value="Add" />
      </form>

      <h3>search from document below</h3>
      <Search />

      <div className="document-table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Document URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>https://www.codechrysalis.io/</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Document;
