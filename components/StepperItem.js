import { View, Text, StyleSheet, Image } from "react-native";
import images from "../utilities/constants/images";
import { color } from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";

const style = StyleSheet.create({
  stepperHolder: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 2,
    paddingRight: 4,
  },
  time: {
    color: color.BLACK,
    fontSize: 18,
    lineHeight: 27,
    textAlign: "right",
    minWidth: 60,
    fontFamily: fonts.POPPINS_REGULAR,
  },
  stepperTitleIconHolder: {
    display: "flex",
    flexDirection: "row",
    flex: 50,
  },
  dotStemHolder: {
    marginLeft: 8,
    alignItems: "center",
  },
  dot: {
    height: 26,
    width: 26,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: color.LIGHT_GRAY,
  },
  selectedDot: {
    borderColor: color.BLUE,
  },
  stem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: 2,
    backgroundColor: color.LIGHT_GRAY,
  },
  stemProgressed: {
    display: "flex",
    backgroundColor: color.BLUE,
  },
  stemDefault: {
    display: "flex",
    backgroundColor: color.LIGHT_GRAY,
  },
  titlesIconHolder: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    marginLeft: 16,
  },
  titleSubtitleHolder: {
    bottom: 10,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flex: 4,
    paddingHorizontal: 4,
  },
  title: {
    color: color.BLACK,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.POPPINS_SEMIBOLD,
  },
  subtitle: {
    color: color.METALLIC_SILVER,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.POPPINS_REGULAR,
  },
  icon: {
    height: 40,
    width: 40,
    backgroundColor: color.WHITE,
    borderRadius: 50,
  },
});

const StepperItem = ({
  selectIcon,
  showStem,
  progress,
  title,
  subtitle,
  time,
  icon,
}) => {
  const progressFlex = progress;
  const defaultFlex = progress ? 100 - progress : 0;

  return (
    <View style={style.stepperHolder}>
      <Text style={style.time}>{time}</Text>
      <View style={style.stepperTitleIconHolder}>
        <View style={style.dotStemHolder}>
          {selectIcon ? (
            <Image
              source={images.STEPPER_ICON}
              style={[style.dot, selectIcon && style.selectedDot]}
            ></Image>
          ) : (
            <View style={style.dot} />
          )}
          <View />
          {showStem && (
            <View style={style.stem}>
              <View
                style={[
                  style.stemProgressed,
                  {
                    flex: progressFlex,
                    width: style.stem.width,
                  },
                ]}
              />
              <View
                style={[
                  style.stemDefault,
                  {
                    flex: defaultFlex,
                    width: style.stem.width,
                  },
                ]}
              />
            </View>
          )}
        </View>
        <View style={style.titlesIconHolder}>
          <View style={style.titleSubtitleHolder}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.subtitle}>{subtitle}</Text>
          </View>
          <Image source={icon} style={style.icon} />
        </View>
      </View>
    </View>
  );
};

export default StepperItem;
