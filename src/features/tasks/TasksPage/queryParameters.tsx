import { useLocation, useHistory } from "react-router-dom";

interface QueryProps {
    key: string;
    value?: string;
}

export const useQueryParameter = ( key: string ) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    const replaceQueryParameter = ({ key, value }: QueryProps) => {
        const searchParams = new URLSearchParams(location.search);

        if (value !== undefined) {
            searchParams.set(key, value);
        } else {
            searchParams.delete(key);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};