import TailButton from "../UI/TailButton";
import Ball from "./Ball";
import { useState } from "react";

export default function Lotto() {
  const [tags, setTags ] = useState();

  const handleOk = () => {
    let arr = [];

    while(arr.length < 7) {
      let number = Math.floor(Math.random() * 45) + 1;

      if(!arr.includes(number)) arr.push(number);
    }

    let bonus = arr.splice(-1);
    arr.sort((a, b) => (a-b));
    console.log(arr, bonus);

    let tm = arr.concat(bonus);
    tm = tm.map(item => <Ball number={item} key={`b${item}`}/>)

    tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);

    setTags(tm);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="m-10">
        {tags}
      </div>
      <div>
        <TailButton caption='로또번호생성' bcolor='orange' handleClick={handleOk}/>
      </div>
    </div>
  )
}
