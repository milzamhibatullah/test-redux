import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../redux/action/index'
import {
 View,
 Text,
 SafeAreaView,
 StyleSheet,
 TouchableOpacity,
 FlatList
} from 'react-native';

export class Dashboard extends React.Component {
 componentDidMount() {
  this.props.getNews();
 }

 renderNews(item) {
  return (
   <TouchableOpacity style={styles.itemNews}>
    <Text style={{ color: '#383838' }}>{item.author}</Text>
   </TouchableOpacity>)
 }



 render() {

  return (
   <SafeAreaView style={{ flex: 1 }}>
    {/** header section */}
    <View style={styles.header}>
     <Text style={styles.text}>News</Text>
    </View>

    {/** setion list news */}
    <FlatList
     data={this.props.news}
     renderItem={({ item }) => this.renderNews(item)}
    />
   </SafeAreaView>
  )
 }
}

const mapStateToProps = state => {
 return {
  email: state.auth.email,
  news: state.news.data,
 }
}

export default connect(mapStateToProps, { getNews })(Dashboard);

const styles = StyleSheet.create({
 header: {
  height: 65,
  backgroundColor: 'white',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#F0F0F0'
 },
 text: {
  color: '#383838',
  fontSize: 18,
  fontWeight: 'bold'
 },
 itemNews: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomColor: '#F0F0F0',
  borderBottomWidth: 1
 }
})