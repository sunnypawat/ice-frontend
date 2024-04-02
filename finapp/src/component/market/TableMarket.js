import React from 'react';
import './Footer.css';

export default function TableMarket() {
    const dataArray = [];
    
    const tableHeaders = ["All", "Largest Cap", "Smallest Cap", "Top Grower", "Top Loser", "Market"];

    const tableRows = dataArray.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
};