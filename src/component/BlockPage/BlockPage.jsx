import { sha256 } from "js-sha256";
import React, { useEffect, useState } from "react";
import "./BlockPage.scss";
import Block from "./Block";

function BlockPage(props) {

  return (
    <div>
      <h2>Block</h2>
      <Block />
    </div>
  );
}

export default BlockPage;
