import React from 'react'
import MUIDataTable from "mui-datatables";

export default function ReconsilationMui({ title, plansList }) {

    const columns = [
        {
            name: 'subscription',
            label: "Reconsilation ID",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>{value?.planName ? value.planName : ''}</>
                    )
                }
            }
        }, {
            name: "connect",
            label: "File Name",
            options: {
                filter: true,
            },
        }, {
            name: "transactionDate",
            label: "Created on",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>{moment(value).format("DD-MM-YYYY LT")}</>
                    );
                },
            },
        }, {
            name: "connect",
            label: "Status",
            options: {
                filter: true,
            },
        }, {
            name: "connect",
            label: "Action",
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
