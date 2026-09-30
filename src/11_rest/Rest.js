import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Rest() {

  const txt1Ref = useRef();
  const txt2Ref = useRef();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 bg-slate-100 text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"/>
        </div>
      </div>
      
    </div>
  )
}
