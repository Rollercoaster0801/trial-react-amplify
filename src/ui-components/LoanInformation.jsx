/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import NEXT from "./NEXT";
export default function LoanInformation(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="979px"
      height="664px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="979px"
        height="664px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,241.00000083446503,220.00000208616257,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="48px"
        fontWeight="800"
        color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
        lineHeight="56.25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="664px"
        height="83px"
        position="absolute"
        top="28px"
        left="-57px"
        padding="0px 0px 0px 0px"
        children="Loan Information"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="835px"
        height="77px"
        position="absolute"
        top="149px"
        left="70px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="24px"
          fontWeight="800"
          color="rgba(202.00000315904617,124.00000020861626,95.00000193715096,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="241px"
          height="77px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          children="Purpose of Loan"
          {...getOverrideProps(overrides, "View.View[1].Text[0]")}
        ></Text>
        <View
          width="488px"
          height="54px"
          position="absolute"
          top="11px"
          left="347px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(252.00000017881393,181.99998915195465,159.0000057220459,0.30000001192092896)"
          {...getOverrideProps(overrides, "View.View[1].View[0]")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="835px"
        height="77px"
        position="absolute"
        top="257px"
        left="70px"
        {...getOverrideProps(overrides, "View.View[2]")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="24px"
          fontWeight="800"
          color="rgba(202.00000315904617,124.00000020861626,95.00000193715096,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="330px"
          height="77px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          children="Loan Amount (ex. 20000)"
          {...getOverrideProps(overrides, "View.View[2].Text[0]")}
        ></Text>
        <View
          width="488px"
          height="54px"
          position="absolute"
          top="6px"
          left="347px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(252.00000017881393,181.99998915195465,159.0000057220459,0.30000001192092896)"
          {...getOverrideProps(overrides, "View.View[2].View[0]")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="835px"
        height="77px"
        position="absolute"
        top="370px"
        left="70px"
        {...getOverrideProps(overrides, "View.View[3]")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="24px"
          fontWeight="800"
          color="rgba(202.00000315904617,124.00000020861626,95.00000193715096,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="241px"
          height="77px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          children="Terms (Months)"
          {...getOverrideProps(overrides, "View.View[3].Text[0]")}
        ></Text>
        <View
          width="488px"
          height="54px"
          position="absolute"
          top="0px"
          left="347px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(252.00000017881393,181.99998915195465,159.0000057220459,0.30000001192092896)"
          {...getOverrideProps(overrides, "View.View[3].View[0]")}
        ></View>
      </View>
      <NEXT
        position="absolute"
        top="539px"
        left="727px"
        {...getOverrideProps(overrides, "View.NEXT[0]")}
      ></NEXT>
    </View>
  );
}
