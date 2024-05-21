import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import CourseItem from './components/Course';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header1}>Courses</Text>
      <View style={styles.tilesContainer}>
        <CourseItem title="Development 1" subtitle="YP0834" />
        <CourseItem title="Development 2" subtitle="YP1100" />
        <CourseItem title="Development 4" subtitle="YP9765" />
        <CourseItem title="Development 3" subtitle="YP5432" />
        <CourseItem title="Ethics" subtitle="YP9999" />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,

  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'flex-start',
  }
});
