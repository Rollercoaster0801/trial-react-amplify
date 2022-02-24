/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SubmissionPageText(props) {
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
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,241.00000083446503,220.00000208616257,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="28px"
        fontWeight="800"
        color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
        lineHeight="32.8125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="8.283132530120483%"
        bottom="85.39156626506023%"
        left="5.515832482124617%"
        right="25.12768130745659%"
        padding="0px 0px 0px 0px"
        children="You are about to submit your application form."
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="21px"
        fontWeight="400"
        color="rgba(202.00000315904617,124.00000020861626,95.00000193715096,1)"
        lineHeight="24.609375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="27.710843373493976%"
        bottom="51.35542168674698%"
        left="5.515832482124617%"
        right="6.945863125638406%"
        padding="0px 0px 0px 0px"
        children="IMPORTANT: By submitting this Loan Application Form, you are agreeing to the Terms and Conditions and Privacy Policy as set by Bank of the Philippine Islands. Click HERE to view the Terms and Conditions and click HERE to view the Privacy Policy."
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="400"
        color="rgba(202.00000315904617,124.00000020861626,95.00000193715096,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="44.42771084337349%"
        bottom="19.126506024096386%"
        left="6.026557711950971%"
        right="4.085801838610827%"
        padding="0px 0px 0px 0px"
        children="☐     I agree with the Terms and Conditions of this site as set by the bank. &#xA;&#xA;☐     I authorize the bank to continue processing my loan application even if the approved loan amount  is lower than the amount I applied for."
        {...getOverrideProps(overrides, "View.Text[2]")}
      ></Text>
    </View>
  );
}
