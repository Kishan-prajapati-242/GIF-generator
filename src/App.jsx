import Random from "./components/Random";
import Tag from "./components/Tag";
import './app.css'

export default function App() {
  return (
  <div className="w-full h-full flex flex-col background relative items-center">
    <h1 className="bg-white absolute w-11/12 text-center mt-[40px] mx-auto text-4xl uppercase font-semibold rounded-md">Random GIFS</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[110px]">
      <Random/>
      <Tag/>
    </div>
  </div>);
}
