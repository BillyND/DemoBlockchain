import { sha256 } from "js-sha256";
import React, { useEffect, useState } from "react";

export function Block(props) {
    const { id, blockProp, nonceProp, dataProp, prevHash, hashProp, listBlock, setListBlock } = props
    const [block, setBlock] = useState(blockProp || 1);
    const [nonce, setNonce] = useState(nonceProp || 1);
    const [data, setData] = useState(dataProp || "");
    const [hash, setHash] = useState(sha256(hashProp || ""));
    const [isMine, setIsMine] = useState(false);
    const [isBlock, setIsBlock] = useState(false);

    useEffect(() => {
        const initHash = prevHash ? sha256(prevHash + "" + block + "" + nonce + "" + data) : sha256(block + "" + nonce + "" + data);
        setHash(initHash);
        setIsBlock(checkText(initHash))

        let cloneListBlock = listBlock

        let indexBlock = cloneListBlock.findIndex(item => item.id === id)

        cloneListBlock[indexBlock] = {
            id: id,
            block: block,
            nonce: nonce,
            data: data,
            prevHash: prevHash,
            hash: initHash
        }

        if (cloneListBlock[indexBlock + 1]) {
            cloneListBlock[indexBlock + 1].prevHash = initHash
        }

        console.log(cloneListBlock)
        setListBlock(cloneListBlock)

    }, [block, nonce, data]);

    useEffect(() => {
        setTimeout(() => {
            handleMine();
        }, 300);
    }, [isMine]);

    const handleMine = () => {
        setIsMine(true);
        let initNonce = 0;

        while (true) {
            const newHash = prevHash ? sha256(prevHash + "" + block + "" + initNonce + "" + data) : sha256(block + "" + initNonce + "" + data);
            if (checkText(newHash)) {
                setNonce(initNonce);
                setIsMine(!checkText(newHash));
                return;
            }
            initNonce++;
        }
    };

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
            {prevHash &&
                <div className="form-group mt-3">
                    <h6 htmlFor="exampleFormControlInput1">Previous Hash</h6>
                    <input type="text" className="form-control" disabled value={prevHash} />
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