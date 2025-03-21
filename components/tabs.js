// Tabs.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <View style={styles.buttonsContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, activeTab === tab.id && styles.activeTab]}
          onPress={() => setActiveTab(tab.id)}
        >
          <Text style={[styles.text, activeTab === tab.id && styles.activeText]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#303649',
  },
  text: {
    fontSize: 14,
  },
  activeText: {
    color: 'white',
  },
});

export default Tabs;
