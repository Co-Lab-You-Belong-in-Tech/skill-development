import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { lighten, darken } from "@mui/system";
import { styled } from "@mui/material/styles";
import { career, Career } from "../../data/mockData";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function RenderGroup({ setTitle }: any) {
  const options = career.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      onChange={(event: any, newValue: Career | null) => {
        setTitle(newValue);
      }}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select Your Career" variant="standard" />
      )}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  );
}

// export function RenderGroupMobile({ setTitle }: any) {
//   const options = career.map((option) => {
//     const firstLetter = option.title[0].toUpperCase();
//     return {
//       firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
//       ...option,
//     };
//   });

//   return (
//     <Autocomplete
//       id="grouped-demo"
//       options={options.sort(
//         (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
//       )}
//       groupBy={(option) => option.firstLetter}
//       getOptionLabel={(option) => option.title}
//       onChange={(event: any, newValue: Career | null) => {
//         setTitle(newValue);
//       }}
//       sx={{ width: 200 }}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Select Your Career"
//           variant="standard"
//           inputProps={{ style: { fontSize: 10 } }}
//           InputLabelProps={{ style: { fontSize: 10 } }}
//           style={{ width: 120, height: 40 }}
//         />
//       )}
//       renderGroup={(params) => (
//         <li>
//           <GroupHeader>{params.group}</GroupHeader>
//           <GroupItems>{params.children}</GroupItems>
//         </li>
//       )}
//     />
//   );
// }
