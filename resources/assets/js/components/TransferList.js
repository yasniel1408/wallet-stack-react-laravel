/**
 * Created by Administrator on 2/17/2021.
 */
import React from 'react';

const TransferList = ({transfers}) =>
    <table className="table">
        <tbody>
            {transfers.map(t => (
                <tr key={t.id}>
                    <td>{t.description}</td>
                    <td className={t.amount>0?"text-success":"text-danger"}>{t.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>

export default TransferList