/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function HOUSINGDESC(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="383px"
      height="226px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="800"
        color="rgba(135.00000715255737,52.000000700354576,17.00000088661909,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="55.75221238938053%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        children="HOUSING LOAN"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="800"
        color="rgba(135.00000715255737,52.000000700354576,17.00000088661909,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="39.823008849557525%"
        bottom="0%"
        left="2.8720626631853787%"
        right="1.0443864229765014%"
        padding="0px 0px 0px 0px"
        children="A house loan or home loan simply means a sum of money borrowed from a financial institution or bank to purchase a house"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
