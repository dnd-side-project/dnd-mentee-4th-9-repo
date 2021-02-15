const DEFAULT_PATH = `${process.env.PUBLIC_URL}/images/detailTags`;

const path = {
  '#그늘에서': {
    lg: `${DEFAULT_PATH}/shade.svg`,
    md: `${DEFAULT_PATH}/shade_md.svg`,
  },
  '#환한곳에서': {
    lg: `${DEFAULT_PATH}/sunny.svg`,
    md: `${DEFAULT_PATH}/sunny_md.svg`,
  },
  '#따뜻하게': {
    lg: `${DEFAULT_PATH}/warmly.svg`,
    md: `${DEFAULT_PATH}/warmly_md.svg`,
  },
  '#적당히포근하게': {
    lg: `${DEFAULT_PATH}/normal.svg`,
    md: `${DEFAULT_PATH}/normal_md.svg`,
  },
  '💧': {
    lg: `${DEFAULT_PATH}/water.svg`,
    md: `${DEFAULT_PATH}/water_md.svg`,
  },
  '💧💧💧': {
    lg: `${DEFAULT_PATH}/more_water.svg`,
    md: `${DEFAULT_PATH}/more_water_md.svg`,
  },
  '#처음모습그대로': {
    lg: `${DEFAULT_PATH}/slow.svg`,
    md: `${DEFAULT_PATH}/slow_md.svg`,
  },
  '#쑥쑥자라요': {
    lg: `${DEFAULT_PATH}/fast.svg`,
    md: `${DEFAULT_PATH}/fast_md.svg`,
  },
};

export default path;
