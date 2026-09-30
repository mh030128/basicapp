import { atom, selector } from "recoil";

export const AtomN = atom({
  key : "AtomN",
  default : 0
});

// selector는 get으로 callback 함수 만들어서 사용
export const AtomN2 = selector({
  key : "AtomN2",
  get : ({get}) => {
    return get(AtomN) * 2;
  }
});
