import "./App.css";
import MainContent from "./mainContent";
import data from "./data.json";

const App: React.FC = () => {
  const { images, styles } = data;

  return (
    <div className="app-container" style={{ backgroundColor: styles.backgroundMain }}>
      <div className="sidebar">
        <div className="sidebar-section">
          
          <div className="icon-group">
            {images.navIcons.map((icon, index) => (
              <img key={index} src={icon} height="20px" width="20px" />
            ))}
          </div>
        </div> 
        <div className="icon-group">
          {images.bottomIcons.map((icon, index) => (
            <img key={index} src={icon} height="20px" width="20px" />
          ))}
        </div>
        
        
      </div>
      <div className="main-content-container">
        <MainContent />
      </div>
    </div>
  );
};

export default App;
