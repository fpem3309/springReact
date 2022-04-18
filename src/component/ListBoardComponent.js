import React from 'react';

const ListBoardComponent = (props) => {
    const {mainProductId,mainProductTitle,mainProductContent,mainProductDate,mainProductCategory,mainProductHit} = props.board;
    return (
        <div>
                <table>
                    <thead>
                    <colgroup>
                        <col width="70%"/>
                            <col width="30%"/>
                    </colgroup>
                    </thead>

                    <tbody>
                    <tr>
                        <td>{mainProductTitle}</td>
                        <td>{mainProductDate}</td>

                    </tr>
                    </tbody>
                </table>
        </div>
    );
};

export default ListBoardComponent;