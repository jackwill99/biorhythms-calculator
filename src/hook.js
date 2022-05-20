import { useState } from "react";

export default function useLocalstorage(key) {
    console.log("called");
    const data = localStorage.getItem(key) ?? new Date().toISOString();
    const [value, setValue] = useState(data);
    const storeData = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
    };
    return [value, storeData];
}
