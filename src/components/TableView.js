import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TableView = (props) => {
    const {rows, columns} = props;
    return(
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            columns ? columns.map((col, i) => {
                            return <TableCell key={i}>{col.label}</TableCell>
                            }) : null 

                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows ? rows.map((row, i) => {
                            return (
                                <TableRow key={i}>
                                    {
                                        columns.map((col, colIndex) => {
                                        return <TableCell key={colIndex}>{row[col.name]}</TableCell>
                                        })
                                    }
                                </TableRow>
                            )
                        }) : null
                    }
                </TableBody>
            </Table>

        </Paper>
    )
}

export default TableView;