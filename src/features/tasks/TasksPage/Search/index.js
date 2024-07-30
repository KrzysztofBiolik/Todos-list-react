import React from "react";
import Input from "../Input";
import { Wrapper } from "./styled";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "../searchQueryParamName";


export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);


    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target !== undefined) {
            searchParams.set(searchQueryParamName, target.value);
        } else {
            searchParams.delete(searchQueryParamName);
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