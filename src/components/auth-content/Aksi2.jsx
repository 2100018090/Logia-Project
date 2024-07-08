import React from "react";
import { Link } from "react-router-dom";
import userlogin from "../userlogin";

const Aksi2 = (props) => {
  const { role: roleUser } = userlogin();
  if (roleUser === "4") {
    return (
      <td className="d-grid gap-2 d-md-block mx-auto">
        <Link to={props.pathdetail}>
          <button type="button" className="btn btn-outline-info btn-sm ">
            Detail
          </button>
        </Link>
      </td>
    );
  } else {
    return (
      <td className=" gap-2 d-md-block mx-auto">
        <Link to={props.pathdetail}>
          <button type="button" className="btn btn-outline-info btn-sm mx-2">
            Detail
          </button>
        </Link>
      </td>
    );
  }
  // case "2":
  //   case "1": {
  //     );
  //   }
  // }
  // }
};

export default Aksi2;
