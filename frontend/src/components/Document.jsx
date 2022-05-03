import React, { useEffect, useState } from "react";
import axios from "axios";
function Document() {
  const [docs, setDocs] = useState([]);
  const [doc, setDoc] = useState({});

  const getAllDocs = async () => {
    const res = await axios.get("http://localhost:8080/docs");
    const docsAll = res.data;
    setDocs(docsAll.reverse());
  };

  const getDocById = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    const res = await axios.get(`http://localhost:8080/docs/view/${id}`);
    const selectedDoc = res.data;
    setDoc(selectedDoc);
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  useEffect(() => {
    console.log("This is the doc", doc);
  }, [docs, doc]);
  if (docs && docs.length > 0) {
    console.log("We have a doc", docs);
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
              <option value="week5">week5</option>
            </select>
            <select>
              <option value="instructor">instructors</option>
              <option value="student">students</option>
            </select>
            <input type="url" placeholder="URL" />
            <input type="submit" value="Search Document List" />
          </form>

          <h3 className="documents-title">search from document below</h3>

          <div className="show-document">
            <select onChange={getDocById} required>
              <option hidden>-- Document --</option>
              {docs.map((doc, index) => {
                return (
                  <option key={index} value={doc.id}>
                    {doc.doc}
                  </option>
                );
              })}
            </select>
            <button>Show Document</button>
          </div>

          {doc.id ? (
            <table className="document-table doc-selected">
              <tbody>
                <tr>
                  <td className="td-id">{doc.id}</td>
                  <td className="td-url">{doc.doc}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            ""
          )}

          <div>
            <h3 className="documents-title">your documents</h3>
            {docs.map((doc, index) => (
              <table key={index} className="document-table">
                <tbody>
                  <tr>
                    <td className="td-id">{doc.id}</td>
                    <td className="td-url">{doc.doc}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    console.log("Docs isn't loading... that is bad, real bad.");
    return <div>loading </div>;
  }
}

export default Document;
