/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import SubmissionInstructions from "./SubmissionInstructions";
export default function SubmissionPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="979px"
      height="716px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="7.262569832402235%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,241.00000083446503,220.00000208616257,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <SubmissionInstructions
        position="absolute"
        top="0%"
        bottom="5.307262569832402%"
        left="1.940755873340143%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.SubmissionInstructions[0]")}
      >
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
          top="13.569321533923304%"
          bottom="80.23598820058997%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          children="You are about to submit your application form."
          {...getOverrideProps(
            overrides,
            "View.SubmissionInstructions[0].Text[0]"
          )}
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
          top="38.805972299041294%"
          bottom="42.43070439251475%"
          left="1.2919895847638447%"
          right="4.392761290073395%"
          padding="0px 0px 0px 0px"
          children="IMPORTANT: By submitting this Loan Application Form, you are agreeing to the Terms and Conditions and Privacy Policy as set by Bank of the Philippine Islands. Click HERE to view the Terms and Conditions and click HERE to view the Privacy Policy"
          {...getOverrideProps(
            overrides,
            "View.SubmissionInstructions[0].Text[1]"
          )}
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
          top="58.63539434112279%"
          bottom="22.601273348197825%"
          left="1.2919895847638447%"
          right="4.392761290073395%"
          padding="0px 0px 0px 0px"
          children="&#xA;&#xA;☐     I agree with the Terms and Conditions of this site as set by the bank.&#xA;&#xD;&#xA;☐     I authorize the bank to continue processing my loan application even if the approved loan amount  is lower than the amount I applied for.&#xD;&#xA;&#xD;&#xA;"
          {...getOverrideProps(
            overrides,
            "View.SubmissionInstructions[0].Text[2]"
          )}
        ></Text>
      </SubmissionInstructions>
    </View>
  );
}
