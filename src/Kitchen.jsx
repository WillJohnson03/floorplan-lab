import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (  
    <div id='kitchen'>
      <Oven />
      <Sink />
      <span>Kitchen</span>
    </div>
  );
}
 
export default Kitchen;