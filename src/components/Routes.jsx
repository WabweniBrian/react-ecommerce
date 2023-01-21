import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiStore } from "../features/uiSlice";

const Routes = () => {
  const { routes } = useSelector(uiStore);
  return (
    <div className="flex-align-center gap-2">
      {routes.map((route, i) => {
        let myRoute = route === "" ? "home" : route;
        return (
          <div className="flex-align-center gap-x-2" key={i}>
            <Link to={`/${route}`} className="capitalize opacity-70">
              {myRoute}
            </Link>
            <FiChevronRight />
          </div>
        );
      })}
    </div>
  );
};

export default Routes;
