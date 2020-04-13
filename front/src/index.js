import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import EmailService from "./services/EmailService";
import io from "socket.io-client";

const url = "http://192.168.0.31:5000";
let socket;

export default function EmailBox() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    async function fetchEmails() {
      const emailList = await EmailService.getEmailList();
      setEmails(emailList.emails);
    }
    fetchEmails();

    socket = io(url);
    socket.on("new_email", (newEmail) => {
      setEmails([newEmail, ...emails]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>This is your Email box</Text>
      </View>
      <FlatList
        data={emails}
        renderItem={(data) => {
          return (
            <View style={styles.emailCard}>
              <View style={styles.emailTitle}>
                <Text style={styles.emailTitleText}>{data.item.title}</Text>
              </View>
              <View style={styles.emailDescription}>
                <Text style={styles.emailDescriptionText}>
                  {data.item.body}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(email) => email._id}
      />
    </View>
  );
}
