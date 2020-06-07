import React from "react";
import Links from "../containers/Links";
import {visibilityFilters} from "../actions";

const SideBar = () => (
    <div>
        <Links filter={visibilityFilters.SHOW_ALL}>All</Links><br></br>
        <Links filter={visibilityFilters.SHOW_ACTIVE}>Active</Links>
        <Links filter={visibilityFilters.SHOW_COMPLETED}>Completed</Links>
    </div>
);

export default SideBar;