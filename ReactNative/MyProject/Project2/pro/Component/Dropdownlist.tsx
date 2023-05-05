import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Dropdownlist = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
    }, []);
  return (
    <View>
      <DropDownPicker
        items={posts.map(post => ({label: post.title, value: post.id}))}
        placeholder="Select a post"
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        onChangeItem={(item:any) => setSelectedPost(item.value)}
        defaultValue={selectedPost}
      />
    </View>
  );
};

export default Dropdownlist;
