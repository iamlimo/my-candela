import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>John Abayomi</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatsCard
          title="Active Projects"
          value="12"
          icon="folder-open"
          color="#34A853"
        />
        <StatsCard
          title="In Design"
          value="7"
          icon="design-services"
          color="#4285F4"
        />
        <StatsCard
          title="In Construction"
          value="5"
          icon="engineering"
          color="#FBBC04"
        />
        <StatsCard title="Completed" value="0" icon="done" color="#EA4335" />
      </View>

      {/* Active Projects Section */}
      <Text style={styles.sectionTitle}>Active Projects</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>Modern Villa Project 1</Text>
        <Text style={styles.projectSubtitle}>Residential Building</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Overall Progress</Text>
          <Text style={styles.progressPercent}>60%</Text>
        </View>
        <View style={styles.projectDetails}>
          <Text style={styles.projectInfo}>Start Date: Jan 15, 2024</Text>
          <Text style={styles.projectInfo}>Timeline: 4 Months</Text>
          <Text style={styles.projectInfo}>Comments: 2 New</Text>
        </View>
      </View>

      {/* Recent Activity Section */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          Design Approved - Modern Villa Project
        </Text>
        <Text style={styles.activityTime}>2 hours ago</Text>
      </View>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          New Comment - Office Complex Project
        </Text>
        <Text style={styles.activityTime}>2 hours ago</Text>
      </View>
    </ScrollView>
  );
};

// interface StatsCardProps {
//   title: string;
//   value: string;
//   icon: string;
//   color: string;
// }

const StatsCard = ({ title, value, icon, color }) => (
  <View style={[styles.statsCard, { backgroundColor: color + "20" }]}>
    <MaterialIcons name={icon} size={24} color={color} />
    <Text style={styles.statsValue}>{value}</Text>
    <Text style={styles.statsTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA", padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  welcomeText: { fontSize: 16, color: "#666" },
  userName: { fontSize: 20, fontWeight: "bold", color: "#000" },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statsCard: {
    width: "48%",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  statsValue: { fontSize: 24, fontWeight: "bold", marginVertical: 8 },
  statsTitle: { fontSize: 14, color: "#666" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  seeAll: {
    color: "#4285F4",
    fontSize: 14,
    marginBottom: 16,
    textAlign: "right",
  },
  projectCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  projectTitle: { fontSize: 16, fontWeight: "bold", color: "#000" },
  projectSubtitle: { fontSize: 14, color: "#666", marginBottom: 8 },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressText: { fontSize: 14, color: "#666" },
  progressPercent: { fontSize: 14, color: "#34A853" },
  projectDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  projectInfo: { fontSize: 12, color: "#666" },
  activityCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  activityText: { fontSize: 14, color: "#000" },
  activityTime: { fontSize: 12, color: "#666", marginTop: 4 },
});

export default Home;
