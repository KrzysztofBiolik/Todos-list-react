import React from "react";
import Input from "../Input";
import { Wrapper } from "./styled";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukaj");


    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target !== undefined) {
            searchParams.set("szukaj", target.value);
        } else {
            searchParams.delete("szukaj");
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };


    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};