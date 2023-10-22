export const truncate = (string: string, length: number = 20): string => {
    if (string?.length <= length) {
        return string;
    }

    return string.slice(0, length - 3) + "...";
};

export const cleanText = (text: string): string => {
    return text?.replace(/\n/g, "")?.replace("\n", "");
};
