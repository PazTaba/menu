
import './Table.css'
import Chair from "../site/Chair";


function Table() {

    return (
        <div className={"contain-site"}>
            <div className={"row"}>
                <Chair />
                <Chair />
            </div>

            <div className={"row center"}>
                <div className={"left "}  >
                    <Chair/>
                </div>
                <div className={"table"}>
                </div>
                <div className={"right"} >
                    <Chair />
                </div>
            </div>
            <div className={"row "}>
                <Chair />
                <Chair />
            </div>
        </div>


    )

}

export default Table;