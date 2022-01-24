import React, { Fragment, useMemo } from "react";
import Select from "react-select";
import classNames from "classnames";
import makeAnimated from "react-select/animated";

const SelectOptions = (props) => {
  const {
    className = "",
    loading = false,
    disabled = false,
    clearable = false,
    searchable = false,
    isRtl = false,
    isMulti = false,
    defaultValue,
    options = [],
  } = props;
  //! State
  const typeSelect = useMemo(() => {
    return;
  }, []);

  const animatedComponents = makeAnimated();
  //! Function

  //! Render
  return (
    <Fragment>
      <Select
        defaultValue={defaultValue}
        classNamePrefix="select-form"
        components={animatedComponents}
        isLoading={loading}
        isDisabled={disabled}
        isClearable={clearable}
        isSearchable={searchable}
        isRtl={isRtl}
        isMulti={isMulti}
        options={options}
        className={classNames(className, typeSelect)}
      />
    </Fragment>
  );
};

export default SelectOptions;
