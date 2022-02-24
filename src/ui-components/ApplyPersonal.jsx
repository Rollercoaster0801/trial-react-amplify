/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ApplyPersonal(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="500px"
      height="222px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Poppins"
        fontSize="50px"
        fontWeight="800"
        color="rgba(252.00000017881393,182.00000435113907,159.0000057220459,1)"
        lineHeight="58.59375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0.384613037109375%"
        padding="0px 0px 0px 0px"
        children="APPLY FOR PERSONAL LOAN"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="50px"
        fontWeight="800"
        color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
        lineHeight="58.59375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0.38461914062499997%"
        padding="0px 0px 0px 0px"
        children="APPLY FOR PERSONAL LOAN"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
