import { useState } from 'react';

export default function MyApp() {
  
  return (
    <div className='wrapper'>
      <h1>Welcome to MyApp</h1>

    <div>
      <h1>default export example</h1>
      <MyB />
      <h1>named export example</h1>
      <Button1 /> &nbsp;
      <Button2 />
     
    <h1>wrapping example</h1>
    <AboutPage />
    <h1>Displaying date</h1>
    <Profile />

    <h1>Rendering lists</h1>
    <ShoppingList />
    </div>

    <div>
  <h1>update screen</h1>
  <CountState />
  <CountState />
  <CountState />
 </div>

 <div>
  <CountState2 count={count} onClick={handleClick} />
  <CountState2 count={count} onClick={handleClick} />
 </div>
 </div>
  );
}



function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
