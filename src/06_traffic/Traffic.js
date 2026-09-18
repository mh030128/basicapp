import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  // 전체 fetch data
  const [tdata, setTdata] = useState();

  // 대분류 data
  const [c1, setC1] = useState();
  // 선택된 대분류
  const [selC1, setSelC1] = useState();

  // 중분류 data
  const [c2, setC2] = useState();
  // 선택된 중분류
  const [selC2, setSelC2] = useState();

  // 상세정보
  const [info, setInfo] = useState();

  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:7f6664e9-58fb-4278-9508-b36283ea3921?`
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;

    console.log(url);

    fetch(url)
      // 성공 시
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      // 에러 시
      .catch(err => console.error(err))

  }
  // 컴포넌트 생성시 fetch
  useEffect(() => {
    getFetchData();
  }, []);
  // tdata가 변경되었을 때
  useEffect(() => {
    if(!tdata) return;

    // 대분류 생성
    let tm = tdata.map(item => item['사고유형대분류']);
    tm = [... new Set(tm)];

    setC1(tm);
  }, [tdata]);

  useEffect(() => {
    if(!tdata || !c1 || !selC1) return;

    // 중분류 생성
    let tm = tdata.filter(item => item['사고유형대분류'] === selC1)
            .map(item => item['사고유형']);
    setC2(tm);

    // 대분류 변경되면 이전에 선택했던 사고유형, 상세정보 초기화
    setSelC2(undefined);
    setInfo(undefined);
  }, [selC1]);

  useEffect(() => {
    if (!selC2) return;

    let tm = tdata.filter(item => item['사고유형대분류'] === selC1 && 
                          item['사고유형'] === selC2)[0];

    //console.log('선택항목', tm);
    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
    
    tm = infoKey.map(item => <div key={item} className="flex">
                              <div className="w-1/2 h-10 flex justify-center items-center bg-lime-600 text-white font-bold">
                                {item}
                              </div>
                              <div className="w-1/2 h-10 flex justify-center items-center border">
                                {parseInt(tm[item]).toLocaleString()}
                              </div>
                            </div>)
    setInfo(tm);
  }, [selC2]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {/* c1의 값이 반드시 있어야 하기 때문에 c1의 값을 먼저 확인 후 출력, &&사용 */}
      {c1 && <TrafficNav title = '대분류' 
                  c = {c1}
                  sel = {selC1}
                  setSel={setSelC1}
      />}
      {c2 && <TrafficNav title = '사고유형' 
                  c = {c2}
                  sel = {selC2}
                  setSel={setSelC2}
      />}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>
    </div>
  )
}
