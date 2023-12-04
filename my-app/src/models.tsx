/** @format */

export interface stateTApp {
  content: string;
  id: number;
  date: string;
}

export type propTCardEdit = {
  propClbk: (str: string) => void;
  id?: number;
};

export type propTCard = {
  propObj?: {
    id: number;
    arr: stateTApp[];
  };
  propClbk: (id: number) => void;
};

export type propTCreatePost = {
  funcClbk: (obj: string) => void;
};

export type propTPostsCards = {
  propArr: stateTApp[];
  propClbk: (id: number) => void;
};
