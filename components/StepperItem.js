import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const style = StyleSheet.create({
  stepperHolder: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  time: {
    color: 'grey',
    fontWeight: 'bold',
    right: -4,
    textAlign: 'right',
    width: 48,
  },
  dotStemHolder: {
    flex: 2,
    alignItems: 'center',
  },
  dot: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: 'white',
    borderWidth: 6,
    borderColor: 'grey',
  },
  selectedDot: {
    borderColor: 'green',
  },
  stem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: 4,
    backgroundColor: 'grey',
  },
  stemProgressed: {
    display: 'flex',
    backgroundColor: 'green',
  },
  stemDefault: {
    display: 'flex',
    backgroundColor: 'grey',
  },
  titlesIconHolder: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 12,
  },
  titleSubtitleHolder: {
    bottom: 8,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flex: 4,
    paddingHorizontal: 4,
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: 'grey',
    fontWeight: 'bold',
  },
  icon: {
    height: 40,
    width: 40,
  },
});

const StepperItem = ({
  selectIcon,
  showStem,
  progress,
  title,
  subtitle,
  time,
  icon
}) => {
  const progressFlex = progress;
  const defaultFlex = progress ? 100 - progress : 0;

  return (
    <View style={style.stepperHolder}>
      <Text style={style.time}>{time}</Text>
      <View style={style.dotStemHolder}>
        <View style={[style.dot, selectIcon && style.selectedDot]} />
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
        <Image
          source={icon}
          style={style.icon}
        />
      </View>
    </View>
  );
};

export default StepperItem;
