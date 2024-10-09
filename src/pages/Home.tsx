import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <Button
        label="Нажми меня"
        onClick={() => navigate('/about')}
        color="blue"
        size="large"
      />
    </div>
    
  );
};

export default Home;