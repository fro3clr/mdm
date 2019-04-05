import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import './confusionMatrix.css'

class ConfusionMatrix extends PureComponent {
    calculateRowTotal = data => data.reduce((acc, curr) => (acc + curr), 0);
    calculateColumnTotal = (data, i) => data.reduce((acc, curr) => (curr[i] + acc), 0);
    calculateTotalSum = data => data.reduce(function (a, b) { return a.concat(b) })
        .reduce(function (a, b) { return a + b });

    render() {
        const { data, titles } = this.props;

        return (
            <Fragment>
                <table className="confustion-matrix">
                    <tbody>
                        <tr>
                            <th> </th>
                            {titles.map((title, i) => (<th key={i}>{title}</th>))}
                            <th>Total</th>
                        </tr>

                        {data.map((row, i) => (
                            <tr key={i}>
                                <td>{titles[i]}</td>
                                {row.map((item, j) => (
                                    <td key={j} style={{ backgroundColor: i === j ? 'green' : 'red' }}>{item}</td>
                                ))}
                                <td>{this.calculateRowTotal(row)}</td>
                            </tr>
                        ))}

                        <tr>
                            <td>Total</td>
                            {data.map((row, i) => (
                                <td key={i}>{this.calculateColumnTotal(data, i)}</td>
                            ))}
                            <td>{this.calculateTotalSum(data)}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

ConfusionMatrix.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

// ConfusionMatrix.defaultProps = {
//     time: null,
//   };

export default ConfusionMatrix;