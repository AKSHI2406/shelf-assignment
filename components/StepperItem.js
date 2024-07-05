import { View, Text, StyleSheet, Image } from 'react-native';

// create colours const
//stem is deviated
//make the dot icon same

const style = StyleSheet.create({
  stepperHolder: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  time: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'right',
  },
  dotStemHolder: {
    flex: 2,
    alignItems: 'center',
  },
  dot: {
    height: 26,
    width: 26,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 6,
    borderColor: 'grey',
  },
  selectedDot: {
    borderColor: '#0373F3',
  },
  stem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: 2,
    backgroundColor: 'grey',
  },
  stemProgressed: {
    display: 'flex',
    backgroundColor: '#0373F3',
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
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
    lineHeight:24
  },
  subtitle: {
    color: '#B1B1B1',
    fontWeight: '400',
    fontSize:16,
    lineHeight:24
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
