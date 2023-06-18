import { sha256 } from "js-sha256";
import React, { useEffect, useState } from "react";

export function Block(props) {
    const { dataBlock, listBlock, setListBlock, index } = props
    const [block, setBlock] = useState(dataBlock?.block || 1);
    const [nonce, setNonce] = useState(dataBlock?.nonce || 1);
    const [data, setData] = useState(dataBlock?.data || "");
    const [hash, setHash] = useState(dataBlock?.hash || "");
    const [prevHash, setPrevHash] = useState(dataBlock?.prevHash || "");
    const [isMine, setIsMine] = useState(false);
    const [isBlock, setIsBlock] = useState(dataBlock?.isBlock || false);

    function checkText(text) {
        return text.startsWith("0000");
    }

    return (
        <div className={`tableHash ${isBlock ? "isBlockHere" : ""}`}>
            <div className="form-group pb-3">
                <h6 htmlFor="exampleFormControlInput1">Block:</h6>
                <input
                    type="number"
                    className="form-control"
                    value={block}
                    onChange={(e) => setBlock(e.target.value)}
                />
            </div>

            <div className="form-group pb-3">
                <h6 htmlFor="exampleFormControlInput1">Nonce:</h6>
                <input
                    type="number"
                    className="form-control"
                    value={nonce}
                    onChange={(e) => setNonce(e.target.value)}
                />
            </div>

            <div className="form-group">
                <h6 htmlFor="exampleFormControlTextarea1">Data</h6>
                <textarea
                    className="form-control textHash"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) => setData(e.target.value)}
                />
            </div>
            {dataBlock?.prevHash &&
                <div className="form-group mt-3">
                    <h6 htmlFor="exampleFormControlInput1">Previous Hash</h6>
                    <input type="text" className="form-control" disabled value={dataBlock?.prevHash} />
                </div>}

            <div className="form-group mt-3 pb-3">
                <h6 htmlFor="exampleFormControlInput1">Hash</h6>
                <input type="text" className="form-control" disabled value={hash} />
            </div>

            <button
                className="btn btn-success"
                onClick={() => {
                    setIsMine(true);
                }}
                disabled={isMine}
            >
                Mine
                {isMine && (
                    <span
                        className="ms-2 spinner-border spinner-border-sm"
                        role="status"
                    ></span>
                )}
            </button>
        </div>
    );
}

export default Block;