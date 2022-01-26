import React, { Fragment, useMemo } from "react";
import Select from "react-select";
import classNames from "classnames";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";
const propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  searchable: PropTypes.bool,
  isRtl: PropTypes.bool,
  isMulti: PropTypes.bool,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
};

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

SelectOptions.propTypes = propTypes;
export default SelectOptions;
