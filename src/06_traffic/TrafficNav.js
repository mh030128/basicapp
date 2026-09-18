import TailButton from '../UI/TailButton';

export default function TrafficNav({title, c, sel, setSel}) {
  const cTag = c.map(item => <TailButton
                                // 여러개가 생성될 때는 반드시 key가 있어야 함. => 대분류는 중복되지 않기 때문에 item으로 입력
                                key = {item} 
                                caption={item}
                                bcolor={sel === item ? 'orange' : 'blue'}
                                handleClick={() => handleClick(item)}
                              />
                      );

  // button click
  const handleClick = (item) => {
    setSel(item);
  }
  return (
    <div className="w-full flex justify-start items-center my-5">
      <div className="w-1/5 flex justify-start items-center">
        교통사고 {title}

      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  )
}
