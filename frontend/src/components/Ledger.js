import React, { Component } from 'react';
import { Table } from 'reactstrap'
import './Ledger.css'

class Ledger extends Component {
    constructor(props) {
        super(props);
        this.fillArray = this.fillArray.bind(this);
    }

    fillArray(outputs) {
        let array = [];
        for (let output in outputs) {
            array.push(output);
        }
        return array;
    }

    render() {
        console.log("Ledger rendering")
        let outputArray = this.fillArray(this.props.ledger);
        return (
            <Table bordered style={this.props.style}>
                <thead style={{ backgroundColor: '#ffffff' }}>
                    <tr>
                        <th>ID</th>
                        <th>Timestamp</th>
                        <th>Holder</th>
                        <th>Strain</th>
                        <th>Thc %</th>
                        <th>Grower</th>
                    </tr>
                </thead>
                <tbody>
                    {outputArray > 0 ? (
                        outputArray.map((output, i) => {
                            return <tr style={{ backgroundColor: '#ffffff' }}>
                                <th className="t-id" scope="row" row={i}>{output.id}</th>
                                <td>{output.timestamp}</td>
                                <td>{output.holder}</td>
                                <td>{output.strain}</td>
                                <td>{output.thc}</td>
                                <td>{output.grower}</td>
                            </tr>
                        })
                    ) : (
                            <tr style={{ backgroundColor: '#ffffff' }}>
                                <th className="t-id" scope="row">N/A</th>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        );
    }
}

export default Ledger;