import React from 'react';
import { Table } from 'react-bootstrap';
import { wordcountToPricing, calculateSavings } from 'libs/utils';

export default function ConfigRow(props: any) {

  return (
    <Table>
      <tbody>
        <tr>
          <td>{props.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>${wordcountToPricing(props.wordcount).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>Save {calculateSavings(props.wordcount).toFixed(0)}%</td>
        </tr>
      </tbody>
    </Table>
  );
}
