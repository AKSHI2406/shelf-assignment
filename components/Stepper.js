import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import StepperItem from "./StepperItem";
//delta is harcoded
//pass icon

const Stepper = ({ config }) => {
  const stepperData = config?.map((d, i) => {
    const delta = 8;
    const currTime = new Date();
    if (currTime >= d.time) {
      if (currTime.getTime() >= d.time.getTime() + delta * 60 * 60 * 1000) {
        d.progress = 100;
        d.selected = true;
      } else{
        d.progress = ((currTime.getHours() % delta) / delta) * 100;
        d.selected = true;
      }
    } else {
      d.progress = 0;
      d.selected = false;
    }
    return d;
  });
  // console.log(currTime , d.time)

  // return d;
  // });

  // console.log(stepperData);

  return (
    <View>
      {/* <Text>{JSON.stringify(newDate)}</Text>
    <Text>{JSON.stringify(stepperData[0].time)}hi</Text> */}
      {stepperData?.map((d, idx) => (
        <StepperItem
          key={d.time.toString()}
          selectIcon={d.selected}
          showStem={idx + 1 < stepperData?.length}
          progress={d.progress}
          title={d.title}
          subtitle={d.subtitle}
          time={d.label}
        />
      ))}
    </View>
  );
};

export default Stepper;
