import { View } from "react-native";
import StepperItem from "./StepperItem";

const Stepper = ({ config }) => {
  const stepperData = config?.map((d, i) => {
    const delta = 8;
    const currTime = new Date();
    if (currTime >= d.time) {
      if (currTime.getTime() >= d.time.getTime() + delta * 60 * 60 * 1000) {
        d.progress = 100;
        d.selected = true;
      } else {
        d.progress = ((currTime.getHours() % delta) / delta) * 100;
        d.selected = true;
      }
    } else {
      d.progress = 0;
      d.selected = false;
    }
    return d;
  });

  return (
    <View>
      {stepperData?.map((d, idx) => (
        <StepperItem
          key={d.time.toString()}
          selectIcon={d.selected}
          showStem={idx + 1 < stepperData?.length}
          progress={d.progress}
          title={d.title}
          subtitle={d.subtitle}
          time={d.label}
          icon={d.icon}
        />
      ))}
    </View>
  );
};

export default Stepper;
