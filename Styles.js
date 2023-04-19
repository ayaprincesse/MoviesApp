import {Dimensions, StyleSheet} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const Constants = {
  textColor: '#000',
  baseColor: '#fff',
  fadedColor: '#00BFFF',
  secondaryColor: '#969696',
};
const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    height: deviceHeight,
  },
  trendingPeopleImage: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  trendingPeopleName: {
    width: 60,
    color: Constants.textColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 16,
    color: Constants.fadedColor,
    marginLeft: 10,
    marginRight: 10,
  },
  heading2: {
    fontSize: 16,
    color: Constants.fadedColor,
    marginLeft: 25,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: Constants.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 25,
    color: Constants.textColor,
    textAlign: 'center',
    marginTop: -20,
    marginBottom : 20,
  },
  linkContainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
  },
  overview: {
    color: Constants.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 15,
    padding:16
  },
  details: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  },
  detailsContainer2: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  genre: {
    color: Constants.textColor,
    fontSize: 16,
  },
  heart:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30
  },
});

export default Styles;