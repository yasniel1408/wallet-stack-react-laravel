/**
 * Created by Administrator on 2/17/2021.
 */
import React from "react";

export const TransferForm = ({ form, onChange, onSubmit }) => (
  <form action="" className="transfer-form" onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Description"
      name="description"
      value={form.description}
      onChange={onChange}
    />
    <input
      type="number"
      placeholder="Amount"
      name="amount"
      value={form.amount}
      onChange={onChange}
    />
    <input type="submit" value="Send" />
  </form>
);

export default TransferForm;
