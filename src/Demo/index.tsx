import React, { useEffect, useState } from "react";
import SwitchButton from "../components/SwitchButton";
import { Condition, Field } from "../types";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { allConditions, allFields } from "../utils/allFieldsAndConditions";
import { useStyles } from "./useStyles";

const Demo = () => {
  // Declarations
  const [filters, setFilters] = useState([
    {
      field: Field.THEME,
      condition: Condition.EQUALS,
      criteria: "Dark",
    },
  ]);

  const [isLogicalAndActive, setIsLogicalAndActive] = useState(true);
  const [humanReadableQueryFormat, setHumanReadableQueryFormat] = useState("");

  const query = {
    [Condition.EQUALS]: "==",
    [Condition.DOES_NOT_EQUAL]: "!==",
    [Condition.IS]: "Is",
    [Condition.IS_EMPTY]: "IS_EMPTY",
    [Condition.IS_NOT]: "IS_NOT",
    [Condition.LIKE]: "LIKE",
    [Condition.NOT_LIKE]: "NOT_LIKE",
  };

  // OnInutChange Methods

  const handleFieldChange = (event: any, index: number) => {
    const allFilters = [...filters];
    allFilters[index].field = event.target.value;
    setFilters(allFilters);
  };

  const handleConditionChange = (event: any, index: number) => {
    const allFilters = [...filters];
    allFilters[index].condition = event.target.value;
    setFilters(allFilters);
  };

  const handleCriteriaChange = (event: any, index: number) => {
    const allFilters = [...filters];
    allFilters[index].criteria = event.target.value;
    setFilters(allFilters);
  };

  // @TODO: Get the json format to make an api call with the query
  // const getJsonData = () => {
  // const filteredData = arr.map(item => {
  //   const operators = filters.map(filter => query[filter.condition].bind(item, filter.field, filter.criteria));
  //   return operators.reduce((a, b) => {
  //     return b() && a;
  //   }, true);
  // });
  // }

  const addFilter = () => {
    const allFilters = [...filters];
    const newFilter = {
      field: Field.THEME,
      condition: Condition.EQUALS,
      criteria: "Dark",
    };
    allFilters.push(newFilter);
    setFilters(allFilters);
  };

  const onLogicalButtonClick = (logicalField: "and" | "or") => {
    setIsLogicalAndActive(logicalField === "and" ? true : false);
  };

  const onApply = () => {
    const stringData = filters
      .map((filter) => {
        return `(field.${filter.field}) ${query[filter.condition]} \\"${
          filter.criteria
        }"\\ `;
      })
      .join(isLogicalAndActive ? " && " : " || ");
    setHumanReadableQueryFormat(stringData);
  };

  useEffect(() => {
    onApply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, isLogicalAndActive]);

  const classes = useStyles();

  return (
    <div>
      <Box padding="24px 16px 24px 32px" className={classes.queryDisplayBox}>
        <Typography variant="h4">Build your query</Typography>
        <Box className={classes.queryText}>
          <Typography variant="h5">
            {`Query : ${humanReadableQueryFormat}`}
          </Typography>
        </Box>
      </Box>
      <Box padding="24px 24px 24px 24px">
        <SwitchButton
          onLogicalButtonClick={(logicalField: "and" | "or") =>
            onLogicalButtonClick(logicalField)
          }
          isLogicalAndActive={isLogicalAndActive}
        />
        <Box marginTop="3rem">
          {filters.map((filter, index) => (
            <Grid key={`${filter.field}_${index}`} container spacing={5}>
              <Grid item sm={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Field
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={filter.field}
                    label="Field"
                    autoWidth
                    variant="filled"
                    onChange={(event) => handleFieldChange(event, index)}
                  >
                    {allFields.map((field) => (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Condition
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={filter.condition}
                    label="Condition"
                    autoWidth
                    variant="filled"
                    onChange={(event) => handleConditionChange(event, index)}
                  >
                    {allConditions.map((condition) => (
                      <MenuItem key={condition} value={condition}>
                        {condition}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={12} md={4}>
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label="Criteria"
                  value={filter.criteria}
                  variant="filled"
                  onChange={(e) => handleCriteriaChange(e, index)}
                />
              </Grid>
            </Grid>
          ))}
        </Box>
        <Box marginTop="20px">
          <Button variant="contained" onClick={addFilter}>
            Add filter
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Demo;
