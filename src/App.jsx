import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UncontrolledField from "./components/UncontrolledField/UncontrolledField";

function App() {
  return (
    <div>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UncontrolledField></UncontrolledField> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>
    </div>
  );
}

export default App;
