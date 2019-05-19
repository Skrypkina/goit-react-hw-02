import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.tableHead}>Transaction</th>
        <th className={styles.tableHead}>Amount</th>
        <th className={styles.tableHead}>Date</th>
      </tr>
    </thead>

    <tbody>
      {history.map(item => (
        <tr key={item.id} className={styles.tableRow}>
          <td className={styles.tableData}>{item.type}</td>
          <td className={styles.tableData}>{item.amount}$</td>
          <td className={styles.tableData}>{item.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  amount: PropTypes.number,
  type: PropTypes.string,
  history: PropTypes.array,
};
export default TransactionHistory;
