import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const CartHistory = (props) => {

  const displayDay =(day) =>{
    switch (day) {
      case 0:return 'Chủ nhật';
      case 1:return 'Thứ hai';
      case 2:return 'Thứ ba';
      case 3:return 'Thứ tư';
      case 4:return 'Thứ năm';
      case 5:return 'Thứ sáu';
      case 6:return 'Thứ bảy';
      default:break;
    }
  }

  const displayTỉme = (time)=>{
    time  = new Date(time);
    const day =displayDay( time.getDay());
    const date = time.getDate()<10? '0'+time.getDate() : time.getDate();
    const month = time.getMonth()+1 <10 ? '0'+(time.getMonth()+1) : (time.getMonth()+1);
    const year = time.getFullYear();

    return `${day}, ${date}/${month}/${year}`;
  }

  const renderItem = ({item}) =>{

    const {createdAt, total , products,status} = item;
    
    return(
      <View style = {styles.cartItemContainer}>
        <Text style = {styles.date}>{displayTỉme( createdAt)}</Text>
        <Text style = {styles.status}>Trạng thái: {status}</Text>
        <Text style = {styles.products}>Tổng sản phẩm: {products.length}</Text>
        <Text style = {styles.total}>Tổng tiền:{total}</Text>
      </View>
    )
  }


  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Lịch sử giao dịch</Text>
      <FlatList
      data ={data}
      keyExtractor = {item => Math.random()}
      renderItem = {renderItem}
      />
    </View>
  );
};

export default CartHistory;

const styles = StyleSheet.create({
  total:{
    fontSize:16,
  },
  products:{
    fontSize:16,
  },
  status:{
    color:'#007537', 
    fontSize:18,
  },
  date:{
    color:'#221F1F',
    fontSize:18,
    borderBottomColor:'#7D7B7B',
    borderBottomWidth: 1
  },
  cartItemContainer:{
    marginTop: 18,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 48,
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
    position:'relative',
    alignItems:'center'
  },
});

var data =[
  {
      "_id": "62072c06a15e450016622f65",
      "user": "61e82569ba79ff0016231d2b",
      "status": "Đã giao hàng",
      "total": 13,
      "products": [
          {
              "_id": "62072c06a15e450016622f66",
              "product": "61d12f0c555401c8610fb8d1",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "62072c06a15e450016622f67",
              "product": "61d12f0c555401c8610fb8d2",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "62072c06a15e450016622f68",
              "product": "61d12f0c555401c8610fb8d3",
              "quantity": 3,
              "price": 3
          }
      ],
      "createdAt": "2022-02-12T03:39:50.725Z",
      "updatedAt": "2022-02-14T12:42:58.975Z"
  },
  {
      "_id": "620aa82e1d4ce700163d7ba2",
      "user": "61e82569ba79ff0016231d2b",
      "status": "Đang xử lý",
      "total": 13,
      "products": [
          {
              "_id": "620aa82e1d4ce700163d7ba3",
              "product": "61d12f0c555401c8610fb8d1",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "620aa82e1d4ce700163d7ba4",
              "product": "61d12f0c555401c8610fb8d2",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "620aa82e1d4ce700163d7ba5",
              "product": "61d12f0c555401c8610fb8d3",
              "quantity": 3,
              "price": 3
          }
      ],
      "createdAt": "2022-02-14T19:06:22.983Z",
      "updatedAt": "2022-02-14T19:06:22.983Z"
  }
]