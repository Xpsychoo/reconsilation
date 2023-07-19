import React from 'react'
import MUIDataTable from "mui-datatables";

export default function ReconsilationMui() {

    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        selectableRows: 'none',
        responsive: "standard",
    };

    return (
        <div className='muiDataTables'>
            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    )
}
