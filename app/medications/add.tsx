import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
const FREQUENCIES = [
  {
    id: "1",
    label: "Once daily",
    icon: "sunny-outline" as const,
    times: ["09:00"],
  },
  {
    id: "2",
    label: "Twice daily",
    icon: "sync-outline" as const,
    times: ["09:00", "21:00"],
  },
  {
    id: "3",
    label: "Three times daily",
    icon: "time-outline" as const,
    times: ["09:00", "15:00", "21:00"],
  },
  {
    id: "4",
    label: "Four times daily",
    icon: "repeat-outline" as const,
    times: ["09:00", "13:00", "17:00", "21:00"],
  },
  {
    id: "5",
    label: "As Needed",
    icon: "calendar-outline" as const,
    times: ["09:00", "21:00"],
  },
];
const DURATIONS = [
  { id: "1", label: "7 days", value: 7 },
  { id: "2", label: "14 days", value: 14 },
  { id: "3", label: "30 days", value: 30 },
  { id: "4", label: "60 days", value: 60 },
  { id: "5", label: "90 days", value: 90 },
  { id: "6", label: "Ongoing", value: -1 },
];
export default function AddMedicationScreen() {
    const [form, setForm] = useState({
        name: "",
        dosage: "",
        frequency: "",
        duration: "",
        startDate: new Date(),
        times: ["9:00"],
        notes: "",
        reminserEnabled: true,
        refillReminder: false,
        currentSupply: "",
        refillAt: ""
    });

  const renderFrequencyOptions = () => {
    return (
      <View>
        {FREQUENCIES.map((freq) => (
          <TouchableOpacity key={freq.id}>
            <View>
              <Ionicons name={freq.icon} size={24} />
              <Text>{freq.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderDurationOptions = () => {
    return (
      <View>
        {DURATIONS.map((dur) => (
          <TouchableOpacity key={dur.id}>
            <View>
              <Text>{dur.value > 0 ? dur.value : "∞"}</Text>
              <Text>{dur.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <View>
      {/* */}
      <LinearGradient
        colors={["#1a8e2d", "#146922"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View>
        <View>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={28} color={"1a8e2d"} />
          </TouchableOpacity>
          <Text>New Medications</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* basic info */}
            <View>
              <TextInput
                placeholder="Medication Name"
                placeholderTextColor={"#999"}
              />
            </View>
            <View>
              <TextInput
                placeholder="Dosage (eg. 500mg)"
                placeholderTextColor={"#999"}
              />
            </View>
            <View>
              <Text>How often?</Text>
              {/* render frequency options */}
              {renderFrequencyOptions()}
              <Text>For how long?</Text>
              {/* render duration options */}
              {renderDurationOptions()}
              <TouchableOpacity>
                <View>
                    <Ionicons name="calendar" size={20} color={"#1a8e2d"} />
                </View>
                <Text>Starts : {}</Text>
              </TouchableOpacity>
              <DateTimePicker  value={form.startDate}
              mode="date"
              />
              <DateTimePicker mode="time" value={(() => {
                const [hours, minutes] = form.times[0].split(":").map(Number);
                const date = new Date();
                date.setHours(hours,minutes, 0,0);
                return date;
              })()} />
            </View>
          </View>
          {/* reminders*/}
          <View>
            <View>
                <View>
                    <View>
                        <View>
                            <Ionicons name="notifications" color={"1a8e2d"} />
                        </View>
                        <View>
                         <Text>Reminders</Text>
                         <Text>Get notified When its time to take your medications</Text>
                       </View>
                    </View>
                   <Switch trackColor={{false: "#ddd", true: "#1a8e2d"}} thumbColor={'white'}/>
                </View>
               
            </View>
          </View>
          {/* refill Tracking */}
          {/* notes */}
          <View>
            <View>
                <TextInput placeholder="Add notes or special instructions..." placeholderTextColor="#999" />
            </View>
          </View>
        </ScrollView>
        <View>
            <TouchableOpacity>
                <LinearGradient
                colors={["#1a8e2d", "#146922"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                >
                    <Text>Add Medication</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
