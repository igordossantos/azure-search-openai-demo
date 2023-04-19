import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What were Nescafé's sales in 2021?",
        value: "What were Nescafé's sales in 2021?"
    },
    { text: "In which countries is Nescau sold?", value: "In which countries is Nescau sold?" },
    { text: "What's Nestlé's most popular product in Chile?", value: "What's Nestlé's most popular product in Chile?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
