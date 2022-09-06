import { Grid } from "@mui/material";
import { SearchBar } from "./SearchBar";

export const Header = (props) => {
    return (<Grid item> <SearchBar query={props.query} setQuery={props.setQuery} /> </Grid>);
}
Header.displayName = `Canvas-Header`;
