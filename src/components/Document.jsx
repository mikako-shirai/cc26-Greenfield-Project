import React from "react";

import Search from "./Searchbtn.jsx";

function Document() {
  const sampleDocument = [
    { id: 1, url: "https://www.codechrysalis.io/" },
    { id: 2, url: "https://www.codechrysalis.io/" },
    { id: 3, url: "https://www.codechrysalis.io/" },
    { id: 4, url: "https://www.codechrysalis.io/" },
    { id: 5, url: "https://www.codechrysalis.io/" },
  ];

  return (
    <div className="documents">
      <h2 className="documents-title">Documents</h2>
      <div>
        <form>
          <select>
            <option value="week1">week1</option>
            <option value="week2">week2</option>
            <option value="week3">week3</option>
            <option value="week4">week4</option>
          </select>
          <select>
            <option value="instructor">instructors</option>
            <option value="student">students</option>
          </select>
          <input type="url" placeholder="URL here" />
          <input type="submit" value="Add to Document List" />
        </form>

        <h3 className="documents-title">search from document below</h3>

        <Search />

        <div>
          <h3 className="documents-title">your documents</h3>
          {sampleDocument.map((elem, index) => (
            <table key={index} className="document-table">
              <tbody>
                <tr>
                  <td>{elem.id}</td>
                  <td>{elem.url}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Document;
