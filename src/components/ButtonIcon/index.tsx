import React from 'react'
import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
    Touchable,
    } from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

export function ButtonIcon() {
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.8}>
        <View style={styles.iconWrapper} >
            <Image source={DiscordImg} style={styles.icon}/>
        </View>

        <Text style={styles.title} >
            Entrar com Discord
        </Text>
        </TouchableOpacity>
    )
}
