import React, { useEffect, useState } from 'react';
import Block from '../BlockPage/Block';

let initBlock = [
    {
        id: 1,
        block: 1,
        nonce: 1,
        data: "",
        prevHash: "0",
        hash: "",
        isBlock: false
    },
    {
        id: 2,
        block: 2,
        nonce: 1,
        data: "",
        prevHash: "000031e97686b6cb8e3d7c375f1313fe7ea358e372bf151e685d9e386b502172",
        hash: "",
        isBlock: false
    },
]

function BlockchainPage(props) {
    const [listBlock, setListBlock] = useState(initBlock)
    useEffect(() => {
        console.log(listBlock)
    }, [JSON.stringify(listBlock)])

    return (
        <div>
            <h2>Block chain</h2>
            <div className='listBlock'>
                {
                    listBlock?.map((itemBlock, index) => (
                        <Block
                            key={itemBlock?.id}
                            index={index}
                            dataBlock={itemBlock}
                            setListBlock={setListBlock}
                            listBlock={listBlock}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default BlockchainPage;