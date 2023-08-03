import { observable } from "mobx";

export const navStore = observable({
    level: '',
    category: '',
    setLevel: (level) => {
        level = level
    },
    setCategory: (category) => {
        category = category;
    },
});
