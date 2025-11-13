// SecListScreen

import { View, Text, StyleSheet, SectionList } from 'react-native';
import React from 'react';

const houses = [
  {
    title: 'DC Comics',
    data: ['Super', 'Super', 'Super'],
  },
  {
    title: 'Marvel Comics',
    data: ['Super', 'Super', 'Super'],
  },
];

const SecListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={houses}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default SecListScreen;