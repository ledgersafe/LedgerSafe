import React, { Component } from 'react';
import { Table } from 'reactstrap'
import './BizLedger.css'

class BizLedger extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("BizLedger rendering")
        let queriedLedger = []
        let queriedBid = this.props.bid
        console.log(queriedBid)
        console.log(this.props.ledger)
        if(queriedBid !== '' && queriedBid !== undefined){
            for (let i = 0; i < this.props.ledger.length; i++) {
                if (queriedBid.toString().toLowerCase() === this.props.ledger[i].holder.toString().toLowerCase()) {
                    queriedLedger.push({ info: this.props.ledger[i], index: i })
                }
            }
        }
        return (
            <div id="ledtable">
                <h3 style={this.props.style}>All Queried Assets</h3>
                <Table responsive bordered style={this.props.style}>
                    <thead style={{ backgroundColor: '#ffffff' }}>
                        <tr>
                            <th>ID</th>
                            <th>Timestamp</th>
                            <th>Business</th>
                            <th>Strain</th>
                            <th>Thc %</th>
                            <th>Grower</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.ledger.length > 0 ? (
                            queriedLedger.map((output, i) => {
                                return <tr style={{ backgroundColor: '#ffffff' }}>
                                    <th className="b-id" scope="row" row={i}>{output.index + 1}</th>
                                    <td>{output.info.timestamp}</td>
                                    <td>{output.info.holder.charAt(0).toUpperCase()  + output.info.holder.slice(1).toLowerCase()}</td>
                                    <td>{output.info.strain}</td>
                                    <td>{output.info.thc}</td>
                                    <td>{output.info.grower}</td>
                                </tr>
                            })
                        ) : (
                                <tr style={{ backgroundColor: '#ffffff' }}>
                                    <th className="b-id" scope="row">N/A</th>
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
            </div>
        );
    }
}

export default BizLedger;