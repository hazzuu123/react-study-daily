import Buttons from "./SVG/Buttons";
import UserList from "./hooks/useFetch/UserList";
import SearchBar from "./hooks/useDebouce/SearchBar";
import UserInfo from "./hooks/useEffect/UserInfo";
import Observer from "./observer/Observer";
import CardList from "./CardList/CardList";
import InfiniteScroll from "./infiniteScroll/InfiniteScroll";
function App() {
  return <InfiniteScroll />;
}

export default App;
