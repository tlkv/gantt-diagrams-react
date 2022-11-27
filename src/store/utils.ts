import { ChartData, ChartTask } from '../data/types';

export const transformData = (elem: ChartTask, lvl = 1) => {
  elem.level = lvl;
  elem.open = true;
  elem.subtasks = elem.sub?.length || 0;
  if (elem?.subtasks) {
    elem?.sub?.forEach((item) => {
      transformData(item, lvl + 1);
    });
  }
};

export const transformCopy = (data: ChartData) => {
  const deepCopy: ChartData = JSON.parse(JSON.stringify(data));
  transformData(deepCopy.chart);
  return deepCopy;
};

export const toggleOpenClose = (elem: ChartTask, fId: number) => {
  if (elem.id === fId) {
    elem.open = !elem.open;
    return true;
  }
  if (elem?.sub) {
    elem?.sub?.forEach((item) => {
      toggleOpenClose(item, fId);
    });
  }
  return false;
};

//
//
// export function Family({ familyTree }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const expand = () => {
//     setIsVisible(!isVisible);
//   };
//   return (
//     <div style={{ paddingLeft: 10 }}>
//   <span onClick={expand}>{familyTree.name}</span>
//   {isVisible ? (
//     familyTree?.children?.map((child) => {
//       return (
//         <div style={{ paddingLeft: 10 }}>
//       <Family familyTree={child} />
//       </div>
//     );
//     })
//   ) : (
//     <></>
//   )}
//   </div>
// );
// }
//
// <Family familyTree={familyTree} />
