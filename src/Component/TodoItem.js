import {
  Text,
  View,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect,useContext} from 'react';
import {styles} from '../../TudoItemStyle';
import { MyContext } from '../../Context';

const TodoItem = ({item}) => {
  const [check, setCheck] = useState(false);
  const {
    key,
    handleCheck,
    editModal,
    setSelected,
  } = useContext(MyContext);

  const clickHandler = () => {
    handleCheck(item.id);
  };

  const handleEdit = () => {
    setSelected(true);
    editModal(item);
  };

  useEffect(() => {
    setCheck(item.checked);
  }, [item.checked]);

  return (
    <View>
      <View style={styles.items}>
        <Pressable onPress={handleEdit}>
          <Text style={styles.line}>{item.title}</Text>
        </Pressable>

        <TouchableOpacity
          onPress={clickHandler}
          style={check ? styles.circleTrue : styles.circle}>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
