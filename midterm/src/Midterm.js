function MyButton1() {
  return (
    <button>사과</button>
  );
}

function MyButton2() {
  return (
    <button>오렌지</button>
  );
}

function MyButton3() {
  return (
    <button>바나나</button>
  );
}

export default function midterm() {
  return (
    <div>
      <h1>당신은 어떤 과일을 좋아하시나요? : </h1>
      <MyButton1 /> <nbsp />
      <MyButton2 /> <nbsp />
      <MyButton3 />
    </div>
  );

  function MyButton1({ count, onClick }) {
    return (
      <button onClick={사과}>
        <h1>당신은 어떤 과일을 좋아하시나요? : 사과 </h1>
      </button>
    );
  }
}