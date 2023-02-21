import React from "react";
import "./adminTable.scss";
const AdminTable = () => {
  return (
    <div className="container admin-table">
      <table>
        <tr>
          <th>TOUR NAME</th>
          <th>PRICE</th>
          <th>TOUR TIME</th>
          <th>PERCENTAGE</th>
          <th>DELETE</th>
          <th>UPDATE</th>
        </tr>
        <tr>
          <td>skfo</td>
          <td>kljidgpod</td>
          <td>gdiorgjoesi</td>
          <td>
            <button>DELETE</button>
          </td>
          <td>
            <button>UPDATE</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AdminTable;
