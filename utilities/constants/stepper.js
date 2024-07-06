import image from '../constants/images'
export const stepper = (date) => {
  const d1 = new Date(date);
  d1.setHours(0);
  d1.setMinutes(0);
  d1.setSeconds(0);
  const d2 = new Date(date);

  d2.setHours(8);
  d2.setMinutes(0);
  d2.setSeconds(0);
  const d3 = new Date(date);

  d3.setHours(16);
  d3.setMinutes(0);
  d3.setSeconds(0);
  const d4 = new Date(date);

  d4.setHours(23);
  d4.setMinutes(59);
  d4.setSeconds(0);

  return [
    {
      time: d1,
      title: "Maldives",
      label: "00:00",
      subtitle: "Save the Turtles",
      icon: image.MALDIVES_ICON
    },
    {
      time: d2,
      title: "Golden beach",
      label: "08:00",
      subtitle: "Surfing on the sea",
      icon: image.GOLDEN_ICON
    },
    {
      time: d3,
      title: "Coconut grove",
      label: "16:00",
      subtitle: "BBQ party by the sea",
      icon: image.COCONUT_ICON
    },
    {
      time: d4,
      label: "23:59",
      title: "Maldives Islands",
      subtitle: "Sea blowing",
      icon: image.ISLANDS_ICON
    },
  ];
};
