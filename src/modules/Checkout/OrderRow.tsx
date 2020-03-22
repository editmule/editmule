import React from 'react';
import { Table } from 'react-bootstrap';

export default function OrderRow(props: any) {

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td className="summary-item">{props.item}</td>
            <td align="right">${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          </tr>
          <tr>
            <td>{props.subtitle}</td>
          </tr>
        </tbody>
      </Table>
      <br />
    </div>

  );
}
