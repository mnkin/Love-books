declare module '*.vue' {
  import Vue from 'vue'
  import createId from './lib/createId';
  export default Vue
}

declare module "*.svg" {
  const content: string;
  export default content;
}

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
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

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | "not found" | "duplicated";
  findTag: (id: string) => Tag;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}
