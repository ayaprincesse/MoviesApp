import Icon from 'react-native-vector-icons/AntDesign' 
import React, { Component, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Heart = props => {

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        //console.log("props",props);
        this._retrieveData();
    });

    _removefromliked = async () => {
        const movie = props?.movie; 
        try {
          const value = await AsyncStorage.getItem('likedmoviesids');
          var updatedArray = JSON.parse(value);
          
          const index = updatedArray.indexOf(movie?.id);
          updatedArray.splice(index, 1);
    
          await AsyncStorage.setItem(
            'likedmoviesids',
             JSON.stringify(updatedArray),
          );
          setLiked(false);
    
        } catch (error) {
          // Error saving data
        }
      };
    
      _addtoliked = async () => {
          
        const movie = props?.movie; 
    
        try {
    
          const value = await AsyncStorage.getItem('likedmoviesids');
          const restoredArray = JSON.parse(value);
           
          if (restoredArray == null) {  
                setLiked(false);
                var newarrayids= new Array();
                newarrayids.push(movie.id)
                await AsyncStorage.setItem(
                  'likedmoviesids',
                   JSON.stringify(newarrayids),
                );
          }
          else {
              restoredArray.push(movie.id);
              await AsyncStorage.setItem(
                'likedmoviesids',
                 JSON.stringify(restoredArray),
              );
          }
    
          setLiked(true);
          this._retrieveData();
        } catch (error) {
          // Error saving data
        }
      };
    
      _retrieveData = async () => {
         const movie = await props?.movie; 
          const id = await movie?.id;
    
        try {
    
          const value = await AsyncStorage.getItem('likedmoviesids');
          const restoredArray = JSON.parse(value);
          
          if (restoredArray == null) {
                setLiked(false);
              }
          else {
                // We have data!!
                //console.log("length",restoredArray.length);
                for(var i=0; i < restoredArray.length; i++) {
                  if(restoredArray[i]==id){  
                     // We found this movie id saved in likes list
                    setLiked(true);
                  }
                }   
            }
        } catch (error) {
          // Error retrieving data
        }
      };

    return (
        <TouchableOpacity
            activeOpacity={1}
            
            onPress={()=>{
              
              if (liked) {
                this._removefromliked();
                setLiked(false);
              }
              else {
                this._addtoliked();
                setLiked(true);
              }
            }}
          >
           
            <Icon 
            name={liked ? 'heart' : 'hearto'} 
            size={30} 
            color="#00BFFF"
             />
             
          </TouchableOpacity>
    );
}
export default Heart;