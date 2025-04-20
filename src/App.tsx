import "./App.css";
import MainContent from "./mainContent";
import data from "./data.json";

const App: React.FC = () => {
  const { images, styles } = data;

  return (
    <div className={`bg-[${styles.backgroundMain}] h-screen flex flex-col lg:flex-row lg:items-center`}>
 
      <div className="flex flex-row lg:flex-col justify-between lg:justify-around items-center w-full lg:w-[5%] h-[5%] lg:h-full p-4">
        <div className="flex flex-row lg:flex-col  gap-2 md:gap-8">
          <div className="flex flex-row lg:flex-col gap-2">
            <img src={images.search} height="20px" width="20px" />
          </div>
          <div className="flex flex-row lg:flex-col gap-2">
            {images.navIcons.map((icon, index) => (
              <img key={index} src={icon} height="20px" width="20px" />
            ))}
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-2">
          {images.bottomIcons.map((icon, index) => (
            <img key={index} src={icon} height="20px" width="20px" />
          ))}
        </div>
      </div>
      <div className={`bg-white flex flex-grow h-full w-full p-4 lg:h-[99%] overflow-hidden rounded-2xl shadow-2xl`}>

        <MainContent />
      </div>
    </div>
  );
};

export default App;
