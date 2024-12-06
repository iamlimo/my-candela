import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from "react-native";

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePreviewSample = () => {
    Alert.alert(
      "Preview Sample",
      "This will display a sample AI-suggested layout."
    );
  };

  const handleOpenCADEditor = () => {
    Alert.alert("Open CAD Editor", "This will open the manual CAD editor.");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.stepText}>Create New Project</Text>
      <View style={styles.progressBar}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressStep,
              index < 6 ? styles.completedStep : styles.currentStep,
            ]}
          />
        ))}
      </View>
      <Text style={styles.questionText}>How would you like to proceed?</Text>
      <Text style={styles.subText}>Choose your preferred design approach</Text>

      <View style={styles.optionContainer}>
        {/* AI Suggested Layout */}
        <TouchableOpacity
          style={[
            styles.optionBox,
            selectedOption === "ai" ? styles.selectedOption : null,
          ]}
          onPress={() => handleOptionSelect("ai")}
        >
          <Text style={styles.optionTitle}>AI Suggested Layout</Text>
          <Text style={styles.optionDescription}>
            Get instant layout suggestions
          </Text>
          <View style={styles.featuresRow}>
            <Text style={styles.feature}>⚡ Instant Result</Text>
            <Text style={styles.feature}>📦 Multiple Options</Text>
            <Text style={styles.feature}>✏️ Easy Customize</Text>
          </View>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handlePreviewSample}
          >
            <Text style={styles.buttonText}>Preview Sample</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Manual CAD Design */}
        <TouchableOpacity
          style={[
            styles.optionBox,
            selectedOption === "manual" ? styles.selectedOption : null,
          ]}
          onPress={() => handleOptionSelect("manual")}
        >
          <Text style={styles.optionTitle}>Manual CAD Design</Text>
          <Text style={styles.optionDescription}>
            Create custom layout from scratch
          </Text>
          <View style={styles.featuresRow}>
            <Text style={styles.feature}>⚙️ Full Control</Text>
            <Text style={styles.feature}>📐 Custom Details</Text>
            <Text style={styles.feature}>⏳ Takes Longer</Text>
          </View>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleOpenCADEditor}
          >
            <Text style={styles.buttonText}>Open CAD Editor</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          AI-Suggested Layouts: Quick results based on your preferences, but may
          need adjustments.
        </Text>
        <Text style={styles.infoText}>
          Manual CAD Design: Complete control over every detail, but requires
          more time and effort.
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  stepText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  progressStep: {
    flex: 1,
    height: 4,
    marginHorizontal: 2,
    borderRadius: 2,
  },
  completedStep: {
    backgroundColor: "#36b37e",
  },
  currentStep: {
    backgroundColor: "#ffc400",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  selectedOption: {
    borderColor: "#36b37e",
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  feature: {
    fontSize: 12,
    color: "#555",
  },
  actionButton: {
    backgroundColor: "#36b37e",
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
  continueButton: {
    backgroundColor: "#36b37e",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
