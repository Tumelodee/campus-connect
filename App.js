import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Menu, Divider, Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const HomePage = ({navigation}) => {
  
  const [isMenuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    
    <Provider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={openMenu}>
            <FontAwesome5 name="bars" size={24} color="black" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>campus-Connect</Text>
        </View>

        <TouchableOpacity style={styles.section}>
          <FontAwesome5 name="bus" size={24} color="blue" />
          <Text style={styles.sectionTitle}>Transport</Text>
          {/* Add content for Transport section */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <FontAwesome5 name="chalkboard-teacher" size={24} color="green" />
          <Text style={styles.sectionTitle}>Tutors</Text>
          {/* Add content for Tutors section */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <FontAwesome5 name="shopping-cart" size={24} color="grey" />
          <Text style={styles.sectionTitle}>Buy</Text>
          {/* Add content for Buy section */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <FontAwesome5 name="handshake" size={24} color="orange" />
          <Text style={styles.sectionTitle}>Sell</Text>
          {/* Add content for Sell section */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <FontAwesome5 name="bed" size={24} color="red" />
          <Text style={styles.sectionTitle}>Accommodation</Text>
          {/* Add content for Accommodation section */}
        </TouchableOpacity>

        <Menu
          visible={isMenuVisible}
          onDismiss={closeMenu}
          anchor={
            <FontAwesome5 name="" size={24} color="black" style={styles.menuIcon} />
            
          }
        >
          <Menu.Item
            icon="cog"
            title="messages"
            onPress={() => {
              closeMenu();
            }}
          />

          <Menu.Item
            icon="cog"
            title="Settings"
            onPress={() => {
              // Add logic for Settings
              closeMenu();
            }}
          />
          <Menu.Item
            icon="shopping-cart"
            title="Cart"
            onPress={() => {
              // Add logic for Cart
              closeMenu();
            }}
          />
          <Menu.Item
            icon="user"
            title="Profile"
            onPress={() => {
              // Add logic for Profile
              closeMenu();
            }}
          />
          <Menu.Item
            icon="calendar"
            title="Appointment"
            onPress={() => {
              // Add logic for Appointment
              closeMenu();
            }}
          />
          <Divider />
          <Menu.Item
            icon="help-circle"
            title="Help"
            onPress={() => {
              // Add logic for Help
              closeMenu();
            }}
          />
          <Menu.Item
            icon="log-out"
            title="Log Out"
            onPress={() => {
              // Add logic for Log Out
              closeMenu();
            }}
          />
        </Menu>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HomePage;
