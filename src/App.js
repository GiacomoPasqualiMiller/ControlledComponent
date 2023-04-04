import { useState } from "react";

import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const Step1 = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "Jhon Jones" })}>Next</button>
  </>
);
const Step2 = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 1 })}>Next</button>
  </>
);
const Step3 = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations!</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const Step4 = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  //esercizio Modali
  const [shouldShowModal, setShouldShowModal] = useState(false);
  //esercizio ControlledOnboardingFlow
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  console.log(onboardingData);

  return (
    <>
      {/* <h3>Uncontrolled Form</h3>
      <UncontrolledForm />
      <h3>Controlled Form</h3>
      <ControlledForm /> */}
      {/* <UncontrolledModal /> */}

      {/* <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Controlled Modal!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide" : "Show"} Modal
      </button> */}
      {/* <UncontrolledOnboardingFlow onFinish={(data) => console.log(data)}>
        <Step1 />
        <Step2 />
        <Step3 />
      </UncontrolledOnboardingFlow> 
      */}
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <Step1 />
        <Step2 />
        {onboardingData.age >= 62 && <Step3 />}
        <Step4 />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
