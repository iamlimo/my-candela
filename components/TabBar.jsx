import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TabBar = ({ state, descriptors, navigation }) => {
  const router = useRouter();

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;
        if (["_sitemap", "+not-found"].includes(route.name)) {
          return null;
        }
        // Handle navigation
        const onPress = () => {
          if (!isFocused) {
            router.push(route.name);
          }
        };

        // Render central "+" button
        if (route.name === "createProjects") {
          return (
            <View key={route.key} style={styles.centerButtonContainer}>
              <TouchableOpacity
                onPress={onPress}
                style={styles.centerButton}
                accessibilityRole="button"
                accessibilityLabel="Create"
              >
                <MaterialIcons name="add" size={30} color="white" />
              </TouchableOpacity>
            </View>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            <MaterialIcons
              name={getIconName(route.name)}
              size={24}
              color={isFocused ? "#FDCB5A" : "#AAA"}
            />
            <Text style={[styles.label, isFocused && styles.focusedLabel]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Helper function for icons
const getIconName = (routeName) => {
  switch (routeName) {
    case "index":
      return "home";
    case "project":
      return "work";
    case "createProjects":
      return "add";
    case "messages":
      return "message";
    case "merchants":
      return "people";
    default:
      return "circle";
  }
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#AAA",
    marginTop: 4,
  },
  focusedLabel: {
    color: "#FDCB5A",
  },
  centerButtonContainer: {
    // position: "absolute",
    // top: -30,
    // alignSelf: "center",
     // Take up the whole screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#ffffff",
    bottom: 40,
    borderRadius: 40,
    width: 75,
    paddingVertical: 10,
  },
  centerButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FDCB5A",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
});

export default TabBar;
