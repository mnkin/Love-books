declare module '*.vue' {
  import Vue from 'vue'
  import createId from './lib/createId';
  export default Vue
}

declare module "*.svg" {
  const content: string;
  export default content;
}
type RootState = {
  recordList: RecordItem[];
  createRecordError: Error | null;
  tagList: Tag[];
  currentTag?: Tag;
}
type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
};
type Tag = {
  id: string;
  name: string;
};
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; //联合类型
  remove: (id: string) => boolean;
  update: (id: string, name: string) => 'success' | "not found" | "duplicated";
  save: () => void;
};
// interface window { }
