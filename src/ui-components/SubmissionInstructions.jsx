/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SubmissionInstructions(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="387px"
      height="469px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="800"
        color="rgba(202.00000315904617,124.00000020861626,95.00000193715096,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="66.52452025586354%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        children="Please fill out all entries in the form to ensure the processing of your loan application. Incomplete information will cause a delay in processing."
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="700"
        color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="38.80597014925373%"
        bottom="42.430703624733475%"
        left="1.2919896640826873%"
        right="4.3927648578811365%"
        padding="0px 0px 0px 0px"
        children="STEP 1: LOAN INFORMATION"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="700"
        color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="58.63539445628998%"
        bottom="22.60127931769723%"
        left="1.2919896640826873%"
        right="4.3927648578811365%"
        padding="0px 0px 0px 0px"
        children="STEP 2: BORROWER INFORMATION"
        {...getOverrideProps(overrides, "View.Text[2]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="18px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        textDecoration="underline"
        position="absolute"
        top="81.2366737739872%"
        bottom="0%"
        left="1.2919896640826873%"
        right="4.3927648578811365%"
        padding="0px 0px 0px 0px"
        children="STEP 3: SUBMISSION"
        {...getOverrideProps(overrides, "View.Text[3]")}
      ></Text>
    </View>
  );
}
