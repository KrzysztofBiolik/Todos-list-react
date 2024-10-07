import { useState, useRef, FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import { StyledForm, Input, Button } from "./styled";
import {addTask} from "../../tasksSlice";
import { useAppDispatch } from "../../../../App/hooks";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current!.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input ref={inputRef}
                value={newTaskContent}
                className=" form__input "
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};
export default Form;