import clone from "@/lib/clone";

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
  create(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
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
