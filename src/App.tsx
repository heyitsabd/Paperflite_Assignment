import "./App.css";
import MainContent from "./mainContent";

function App() {
  return (
    <div className="bg-[#EFEFEF] h-screen flex flex-col lg:flex-row items-center pt-2 pb-2 pr-0 lg:pr-2 ">
      <div className="flex flex-row lg:flex-col justify-between h-[5%] lg:h-full w-[100vw] lg:w-[5%] p-4">
        <div className="flex flex-row lg:flex-col gap-2">
          <h1>Hii</h1>
          <h1>Hello</h1>
          <h1>Hey</h1>
        </div> 
        <div className="flex flex-row lg:flex-col gap-2">
          <h1>Tata</h1>
          <h1>Bye</h1>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex text-black p-4 h-full w-[95vw] lg:w-[100vw] rounded-2xl shadow-2xl">
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
