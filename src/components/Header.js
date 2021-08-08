import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { routerContext } from "../provider/router/routerContext";
export const Header = () => {
  const { setRoute } = useContext(routerContext);

  return (
    <div className="header">
      <div className="header-button-div">
        <Button
          onClick={() => setRoute("Cart")}
          variant="contained"
          id="herder-button"
          color="primary"
        >
          Cart
        </Button>
        <Button
          onClick={() => setRoute("Product-List")}
          variant="contained"
          color="primary"
        >
          Menu
        </Button>
      </div>
    </div>
  );
};
