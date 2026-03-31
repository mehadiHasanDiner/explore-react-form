import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FormAction from "./components/FormAction/FormAction";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UncontrolledField from "./components/UncontrolledField/UncontrolledField";

function App() {
  return (
    <div>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      <ControlledField></ControlledField>
      {/* <UncontrolledField></UncontrolledField> */}
    </div>
  );
}

export default App;
