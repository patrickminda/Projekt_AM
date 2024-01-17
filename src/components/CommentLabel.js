import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StarRating from 'react-native-star-rating';
import { Entypo } from '@expo/vector-icons';

const CommentLabel = ({name, service, data, comment}) => {
  

  return (
   
           

        <View style={styles.commentBody}> 
            
            <View style={styles.contentTop}>
                <View style={styles.contenLeft}>

                <StarRating
                        maxStars={5}
                        rating={5}
                        fullStarColor={'yellow'}
                        starSize={12}
                        containerStyle={styles.starRatingContainer}
                        buttonStyle={{ marginRight: 1 }}
                    />

                    <Text style={styles.textContentTop}>{service}</Text>
                </View>

            <Text style={styles.textContentTop}>{name} <Entypo name="dot-single" size={12} color="white" /> {data}</Text>

            </View>
    <View>
         <Text style={styles.textCommentContent}>{comment}
            </Text>

    </View>
       
       
               

        </View>
           
        
   
  );
};
const styles = StyleSheet.create({

  commentBody: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      width: '100%',
      flex: 1,
      marginTop: 10,
      borderRadius: 10,
      padding: 10,
  },

  contentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contenLeft: {
     flexDirection: 'column',    
  },
  textContentTop: {
    fontSize: 12,
    fontWeight: '200',
    color: '#fff',
  },


  textCommentContent: {
    fontSize: 12,
    fontWeight: '200',
    color: '#fff',
    textAlign: 'justify',
    lineHeight: 16,
    padding: 10,
  },
  
  starRatingContainer: {
    marginBottom: 5,
  },

});

export default CommentLabel;
