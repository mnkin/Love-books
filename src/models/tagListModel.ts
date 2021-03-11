const localStorageKeyName = "tagList";
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
};
const tagListModel = {
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(
            localStorageKeyName,
            JSON.stringify(data)
        );
    },
};

export default tagListModel;
