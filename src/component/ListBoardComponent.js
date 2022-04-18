import React from 'react';

const ListBoardComponent = (props) => {
    const {
        mainProductId,
        mainProductTitle,
        mainProductContent,
        mainProductDate,
        mainProductCategory,
        mainProductHit
    } = props.board;
    return (
        <div id="cate_area">
            <div className="cate_board">
                <p>Java</p>
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
        </div>
    );
};

export default ListBoardComponent;