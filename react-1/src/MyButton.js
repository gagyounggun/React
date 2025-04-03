export default function MyButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  )
}