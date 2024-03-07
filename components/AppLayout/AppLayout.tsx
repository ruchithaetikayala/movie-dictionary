import { ReactElement } from "react";
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import "./AppLayout.css";

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="app-container">
      <SearchAppBar />
      {children}
    </div>
  );
};

export default AppLayout;
