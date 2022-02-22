/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PersonalPg(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "View.View[0]": {}, "View.Text[0]": {}, View: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { "View.View[0]": {}, "View.Text[0]": {}, View: {} },
      variantValues: { property1: "Variant2" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="612px"
      height="121px"
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
        backgroundColor="rgba(252.00000017881393,182.00000435113907,159.0000057220459,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="64px"
        fontWeight="800"
        color="rgba(138.1250050663948,49.87518131732941,12.66145259141922,1)"
        lineHeight="75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="14.049586776859504%"
        bottom="13.223140495867769%"
        left="8.465608584335428%"
        right="2.7777752845115913%"
        padding="0px 0px 0px 0px"
        children="Personal Loan"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
