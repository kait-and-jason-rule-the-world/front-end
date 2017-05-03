import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import axios from 'axios';

export default class ScrollTest extends Component{


  render(){
    const imageUrl = 'https://dummyimage.com/300';
    //images have to be in https otherwise they won't load...
    return(
      <ScrollView>
        <Text style={{fontSize: 50}}>Look at all the scroll stuff!!</Text>
        <Image
          style={{height: 300, width: 300}}
          source={{uri: imageUrl }}
           />
           <Image
             style={{height: 300, width: 300}}
             source={{uri: imageUrl }}
              />
              <Image
                style={{height: 300, width: 300}}
                source={{uri: imageUrl }}
                 />
                 <Image
                   style={{height: 300, width: 300}}
                   source={{uri: imageUrl }}
                    />
                    <Image
                      style={{height: 300, width: 300}}
                      source={{uri: imageUrl }}
                       />
                       <Image
                         style={{height: 300, width: 300}}
                         source={{uri: imageUrl }}
                          />
                          <Image
                            style={{height: 300, width: 300}}
                            source={{uri: imageUrl }}
                             />
                             <Image
                               style={{height: 300, width: 300}}
                               source={{uri: imageUrl }}
                                />
                                <Image
                                  style={{height: 300, width: 300}}
                                  source={{uri: imageUrl }}
                                   />
                                   <Image
                                     style={{height: 300, width: 300}}
                                     source={{uri: imageUrl }}
                                      />
                                      <Image
                                        style={{height: 300, width: 300}}
                                        source={{uri: imageUrl }}
                                         />
                                         <Image
                                           style={{height: 300, width: 300}}
                                           source={{uri: imageUrl }}
                                            />
                                            <Image
                                              style={{height: 300, width: 300}}
                                              source={{uri: imageUrl }}
                                               />
                                               <Image
                                                 style={{height: 300, width: 300}}
                                                 source={{uri: imageUrl }}
                                                  />
                                                  <Image
                                                    style={{height: 300, width: 300}}
                                                    source={{uri: imageUrl }}
                                                     />
                                                     <Image
                                                       style={{height: 300, width: 300}}
                                                       source={{uri: imageUrl }}
                                                        />
      </ScrollView>
    )
  }

};
