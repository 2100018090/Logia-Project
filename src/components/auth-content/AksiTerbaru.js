import React from "react";
import { Link } from "react-router-dom";
import userlogin from "../userlogin";

const Aksi = (props) => {
  const { role: roleUser } = userlogin();
  
  return (
    <td className="d-grid gap-2 d-md-block mx-auto">
      {/* Tampilkan tombol "Ubah" */}
      {roleUser !== "4" && (
        <Link to={props.pathedit}>
          <button type="button" className="btn btn-outline-success btn-sm mx-2">
            Ubah
          </button>
        </Link>
      )}
      
      {/* Tampilkan tombol "Hapus" */}
      <button
        type="button"
        className="btn btn-outline-danger btn-sm mx-2"
        onClick={props.onclick}
      >
        Hapus
      </button>
    </td>
  );
};

export default Aksi;
