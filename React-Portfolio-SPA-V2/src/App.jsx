// import DonutChart from "./components/Diagrams/DonutChart";
// import ProgressBar from "./components/Diagrams/ProgressBar";
// import ProgressRing from "./components/Diagrams/ProgressRing";
// import DigitalClock from "./components/DigitalClock";
// import Icon from "./components/Icon";
// import styles from "./style.module.css"

// const FAKE_DATA = [
//   {
//     id: 1,
//     percent: 50,
//     color: 'RED',
//     label: 'Slice 1',
//   },
//   {
//     id: 2,
//     percent: 15,
//     color: 'pink',
//     label: 'Slice 2',
//   },
//   {
//     id: 3,
//     percent: 25,
//     color: 'DodgerBlue',
//     label: 'Slice 3',
//   },
// ];


// function App() {
//   return (
//     <div className={styles.app__wrapper}>
//       <div className={styles.pomodoro__wrapper}>
//         <ProgressBar />
//       <DigitalClock />
//       {/* <DonutChart
//           viewBox={100}
//           radius={50}
//           borderSize={20}
//           data={FAKE_DATA}
//           clickCb={(props) => {console.log(props)}}
//         /> */}
//         {/* <ProgressRing /> */}
//       </div>
//     </div>
//   );
// }

// export default App;


import Router from "./router";

const App = () => {
  return <Router />;
};

export default App;