import React, { useEffect, useState } from 'react';
import {View,Text,FlatList,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; // Redux hooks
import { fetchBikes } from '../redux/bikeSlice'; // Gọi từ slice

export default function Screen2 (){
  const dispatch = useDispatch();

  const bikes = useSelector((state) => state.bikes.data); // Lấy danh sách sản phẩm

  const status = useSelector((state) => state.bikes.status);

  const [filter, setFilter] = useState('All'); // Trạng thái bộ lọc

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBikes());
    }
  }, [dispatch, status]);
  
  const filteredData = bikes.filter(
    (
      item // Thêm logic lọc
    ) => (filter === 'All' ? true : item.type === filter)
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name || 'No Name'}</Text>
      <Text style={styles.itemPrice}>
        {item.price ? `$${item.price}` : 'No Price'}
      </Text>
    </View>
  );

  return (
    <View style = {styles.container}>

      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>The world's Best Bike</Text>
      </View>

      <View style = {styles.container_touch}>
        <TouchableOpacity style={[
          styles.container_touch1,
          filter === 'All',
        ]}
        onPress={() => setFilter('All')}>
        <Text style={styles.container_touch1a}>All</Text>
        </TouchableOpacity>   

        <TouchableOpacity style={[
          styles.container_touch1,
          filter === 'Roadbike', // Highlight nút All,
        ]}
          onPress={() => setFilter('Roadbike')}>
          <Text style={styles.container_touch1a}>Roadbike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[
          styles.container_touch1,
          filter === 'Mountain',
        ]}
          onPress={() => setFilter('Mountain')}>
          <Text style={styles.container_touch1a}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData} // Hiển thị danh sách sản phẩm đã lọc
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Hiển thị dạng lưới 2 cột
        columnWrapperStyle={styles.row} // Căn chỉnh hàng
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', 
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
  },
  container_touch: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container_touch1: {
    width: 99,
    height: 32,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E94141',
  },
  container_touch1a: {
    color: '#E94141',
    fontSize: 20,
    fontWeight: '400',
  },
  row: {
    justifyContent: 'space-between', // Căn đều các mục trong hàng
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
})