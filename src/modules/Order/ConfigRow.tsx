import React from 'react';
import { Table } from 'react-bootstrap';
import { wordcountToPricing, calculateSavings } from 'libs/utils';

export default function ConfigRow(props: any) {

  return (
    <Table>
      <tbody>
        <tr>
          <td>{props.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>${Number(wordcountToPricing(props.wordcount)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td style={{color: 'green'}}>Save {calculateSavings(props.wordcount)}%</td>
        </tr>
      </tbody>
    </Table>
  );
}
