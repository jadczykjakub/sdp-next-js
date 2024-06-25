import { ReactNode } from "react";

interface IDecorationWrapper {
    children: ReactNode;
    theme: "bright" | "dark",
    type: "single" | "double",
}

const DecorationWrapper = ({children, type, theme}: IDecorationWrapper) => {

    return <div className={` relative w-fit py-4 my-1  ${type === 'single' ? 'bottomDecoration' : 'topDecoration bottomDecoration'} ${theme === "dark" ? "after:via-secondary before:via-secondary" : ''}`}>
        {children}
    </div>;
}
 
export default DecorationWrapper;