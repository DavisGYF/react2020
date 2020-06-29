import React from "react";
import "./App.css";

import ContextPage from "./pages/contextDemo/ContextPage";

import AntdFormPage from "./pages/formDemo/AntdFormPage";
import MyRCFieldForm from "./pages/formDemo/MyRCFieldForm";

function App() {
  return (
    <div>
      {/* <ContextPage></ContextPage> */}
      {/* <AntdFormPage></AntdFormPage> */}
      <MyRCFieldForm></MyRCFieldForm>
    </div>
  );
}

export default App;
