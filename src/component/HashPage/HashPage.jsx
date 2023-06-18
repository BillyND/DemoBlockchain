import React, { useState } from "react";
import "./HashPage.scss";
import { sha256, sha224 } from "js-sha256";

function HashPage(props) {
  const [hash, setHash] = useState(sha256(""));

  return (
    <div>
      <h2>SHA256 Hash</h2>
      <div className="tableHash">
        <div className="form-group">
          <h6 htmlFor="exampleFormControlTextarea1">Data</h6>
          <textarea
            className="form-control textHash"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setHash(sha256(e.target.value))} // hash to sha256
          />
        </div>

        <div className="form-group mt-3 pb-3">
          <h5 htmlFor="exampleFormControlInput1">Hash</h5>
          <input type="text" className="form-control" disabled value={hash} />
        </div>
      </div>
    </div>
  );
}

export default HashPage;
