import agri from "./farm.jpg";
import { ImageWrapper, Wrapper } from "./App.style";
function App() {
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          style={{ height: "100%", width: "100%" }}
          src={agri}
          alt="BhoomiSeeds"
        />
      </ImageWrapper>
    </Wrapper>
  );
}

export default App;
