function MyClockTime() {

  return (
    <div>
      현재 시각 : {new Date().toLocaleTimeString()}
    </div>
  );
}

export default MyClockTime ;