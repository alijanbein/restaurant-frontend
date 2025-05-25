import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LanguageSelect(props) {
  const [language, setLanguage] = React.useState("en");

  const handleChange = (event) => {
    setLanguage(event.target.value);
    props.setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Language
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={language}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ar"}>Arabic</MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
