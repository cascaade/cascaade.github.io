import { useCallback, type ReactNode } from "react";
import styles from "./Button.module.scss";

export type ButtonProps = {
    type: "primary" | "secondary";
    children: ReactNode;
    target?: "same" | "new";
    className?: string;
    href?: string;
    onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button(props: ButtonProps) {
    const hrefCallback = useCallback(() => {
        open(props.href, props.target == "same" ? "_self" : "_blank");
    }, [props]);

    return <button className={`${styles[props.type]} ${props.className ?? ''}`} onClick={props.href ? hrefCallback : props.onButtonClick}>{props.children}</button>;
}