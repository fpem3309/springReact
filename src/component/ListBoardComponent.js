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