import React from 'react'
import MUIDataTable from "mui-datatables";

export default function ReconsilationMui({ title, plansList }) {

    const columns = [


        {
            name: 'subscription',
            label: "Plan name",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>{value?.planName ? value.planName : ''}</>
                    )
                }
            }
        },
        {
            name: "transactionDate",
            label: "Purchase Date",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>{moment(value).format("DD-MM-YYYY LT")}</>
                    );
                },
            },
        },

        {
            name: "connect",
            label: "Total Connect",
            options: {
                filter: true,
            },
        },

    ];

    const options = {
        selectableRows: 'none',
        responsive: "standard"
    };

    return (
        <div className='muiDataTables'>
            <MUIDataTable
                title={title}
                data={plansList}
                columns={columns}
                options={options}
            />
        </div>
    )
}
