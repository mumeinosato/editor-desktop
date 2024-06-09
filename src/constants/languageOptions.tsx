export interface LanguageOption {
    id: number;
    name: string;
    label: string;
    value: string;
}

export const languageOptions: LanguageOption[] = [
    {
        id: 3,
        name: "C (GCC)",
        label: "C (GCC)",
        value: "c",
    },
    {
        id: 1, 
        name: "C++ (GCC)",
        label: "C++ (GCC)",
        value: "cpp" 
    },
    {
        id: 2,
        name: "Python (バージョン知らん)",
        label: "Python (バージョンは知らん)",
        value: "python",
    }
];