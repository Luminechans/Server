import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import React ,{useState}from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditProfile = (props) => {

  const { navigation } = props;
  const { _id, name, address, phone, avatar,dob, email } = data;

  const [fullname, setFullname] = useState(name);
  const [location, setLocation] = useState(address);
  const [mobile, setMobile] = useState(phone);
  const [birthday, setBirthday] = useState(dob);

  const [showDatetimePicker, setShowDatetimePicker] = useState(false);
  const displayTime = (time) =>{
    time = new Date(time);
    return time.getDate() + '/'+(time.getMonth()+1) +'/'+time.getFullYear();
  }

  const onChangeDateTime=(event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatetimePicker(false);
    setBirthday(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉnh sửa thông tin</Text>
      <Text style={styles.instruction}>Thông tin sẽ được lưu cho lần mua kế tiếp</Text>
      <Text style={styles.instruction}>Bấm vào lưu thông tin để chỉnh sửa</Text>
      <View style={styles.formContainer}>
        <TextInput value={fullname} onChangeText= {setFullname} style={styles.inputText}/>
        <TextInput value={location} onChangeText= {setLocation} style={styles.inputText}/>
        <TextInput value={mobile} onChangeText= {setMobile} style={styles.inputText}/>
        <TextInput value={displayTime(birthday)} onPressIn ={()=>setShowDatetimePicker(true)} style={styles.inputText}/>
      </View>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.save}>Lưu thông tin</Text>
      </Pressable>
      {showDatetimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(birthday)}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChangeDateTime}
        />
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  save:{
    color:'white',
    textTransform: 'uppercase',
  },
  buttonContainer:{
    position:'absolute',
    bottom:0,
    backgroundColor:'#007537',
    height:50,
    borderRadius:8,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  inputText:{
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#ABABAB',
    color:'#7D7B7B',
    fontSize:16,
  },
  formContainer:{
    marginTop:60,
    width:'100%',
  },
  instruction:{
    fontSize:14,
    color:'#221F1F',
    alignSelf:'flex-start',
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

var data = {
  "_id": "61e82569ba79ff0016231d2b",
  "name": "Phạm Văn Diễn",
  "address": "Thái Bình",
  "phone": "0999999999",
  "avatar": "",
  "dob":"2022-01-26T12:26:27.864Z",
  "email": "dien9x5@gmail.com",
  "createdAt": "2022-01-19T14:51:21.489Z",
  "updatedAt": "2022-01-19T14:51:21.489Z",
  "__v": 0
}