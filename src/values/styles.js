import {StyleSheet} from 'react-native';
import {colors} from "./colors";
import {dimens} from "./dimens";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    welcome: {
        fontSize: dimens.text_size_heading,
        textAlign: 'center',
        margin: dimens.margin_small,
    },
    instructions: {
        textAlign: 'center',
        color: colors.textColorPrimary,
        marginBottom: dimens.margin_tiny,
    },
});
