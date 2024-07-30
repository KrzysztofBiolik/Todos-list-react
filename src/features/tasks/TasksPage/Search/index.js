import React from "react";
import Input from "../Input";
import { Wrapper } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");


    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
            />
        </Wrapper>
    )
};