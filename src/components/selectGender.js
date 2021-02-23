import React, { Component, useState } from "react";

const SelectInput = (props) => {
  return (
    <>
      <select
        data-testid={props.data}
        name={props.name}
        onChange={props.onChange}
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </>
  );
};

export default SelectInput;
