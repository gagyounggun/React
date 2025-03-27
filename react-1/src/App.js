import MyB from "./MyButton"
import { Button1, Button3 } from "./ButtonLib";
import AboutPage from "./aboutPage";
import Profile from "./ProFile";
import ShoppingList from "./ShoppingList";

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyB /><br></br> &nbsp;
      <Button1 /><Button3 />
      <AboutPage />
      <Profile />
      <ShoppingList />
    </div>
  );
}