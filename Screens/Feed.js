import PostCard from "./PostCard";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

let posts = require("./temp_posts.json")

export default class Feed extends Component {
  
  renderItem = ({item:post}) => {
    return <PostCard post={post}/>
  }

  keyExtractor = (item, index) => index.toString();

  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.driodSafeArea}/>
        <View style={styles.appTitle}>
          <Text style={styles.appTitleText}>Spectagram</Text>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'darkblue'
  },
  driodSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 35
  },
  appTitle:{
    flex: 0.07,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  appTitleText:{
    color: "white",
    fontSize: 28,
  },
  cardContainer: {
    flex: 0.93
  }
})