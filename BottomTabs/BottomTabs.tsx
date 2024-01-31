import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import screens from "../screens";

const Tab = createBottomTabNavigator();
export default function BottomTabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={screens.Home} />
            <Tab.Screen name="Profile" component={screens.Profile} />
            <Tab.Screen name="About" component={screens.About} />
        </Tab.Navigator>
    )
}