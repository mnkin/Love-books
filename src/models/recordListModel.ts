const localStorageKeyName = "recordList";
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
};
const recordListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
  },
  save() {
    window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.data)
    );
  },
};

export default recordListModel;
