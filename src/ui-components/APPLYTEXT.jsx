/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import PERSONALLETTER from "./PERSONALLETTER";
export default function APPLYTEXT(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="948px"
      height="174px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <PERSONALLETTER
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.PERSONALLETTER[0]")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="56px"
          fontWeight="800"
          color="rgba(252.00000017881393,182.00000435113907,159.0000057220459,1)"
          lineHeight="65.625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0.7674176481705678%"
          right="0.14167138795812423%"
          padding="0px 0px 0px 0px"
          children="APPLY FOR PERSONAL LOAN"
          {...getOverrideProps(overrides, "View.PERSONALLETTER[0].Text[0]")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="56px"
          fontWeight="800"
          color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
          lineHeight="65.625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0.9090825978210707%"
          padding="0px 0px 0px 0px"
          children="APPLY FOR PERSONAL LOAN"
          {...getOverrideProps(overrides, "View.PERSONALLETTER[0].Text[1]")}
        ></Text>
      </PERSONALLETTER>
    </View>
  );
}
