// // export default _layout;
// import { Tabs } from "expo-router";
// import React from "react";
// import TabBar from "../components/TabBar";

// const _layout = () => {
//   return (
//     <Tabs tabBar={(props) => <TabBar {...props} />}>
//       <Tabs.Screen name="index" options={{ title: "Home" }} />
//       <Tabs.Screen name="project" options={{ title: "Projects" }} />
//       <Tabs.Screen
//         name="createProjects"
//         options={{ title: "Create Projects" }}
//       />
//       <Tabs.Screen name="messages" options={{ title: "Messages" }} />
//       <Tabs.Screen name="merchants" options={{ title: "Merchants" }} />
//     </Tabs>
//   );
// };

// export default _layout;
import { Tabs } from "expo-router";
import React from "react";
import TabBar from "../components/TabBar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="projects" options={{ title: "Projects" }} />
      <Tabs.Screen
        name="createProjects"
        options={{ title: "Create Projects" }}
      />
      <Tabs.Screen name="messages" options={{ title: "Messages" }} />
      <Tabs.Screen name="merchants" options={{ title: "Merchants" }} />
    </Tabs>
  );
};

export default _layout;
