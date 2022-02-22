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
import { Icon, View } from "@aws-amplify/ui-react";
export default function CREDITBTN(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "View.Icon[0]": {}, View: {} },
      variantValues: { isDISABLED: "false", variant: "link" },
    },
    {
      overrides: { "View.Icon[0]": {}, View: {} },
      variantValues: { isDISABLED: "true", variant: "Default" },
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
      width="325px"
      height="283px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="325px"
        height="247.625px"
        pathData="M297.86 0L27.1398 0C12.1311 0 0 11.8838 0 26.5312L0 221.094C0 235.741 12.1311 247.625 27.1398 247.625L297.86 247.625C312.869 247.625 325 235.741 325 221.094L325 26.5312C325 11.8838 312.869 0 297.86 0ZM30.5252 26.5312L294.475 26.5312C296.337 26.5312 297.86 28.0236 297.86 29.8477L297.86 53.0625L27.1398 53.0625L27.1398 29.8477C27.1398 28.0236 28.6632 26.5312 30.5252 26.5312ZM294.475 221.094L30.5252 221.094C28.6632 221.094 27.1398 219.601 27.1398 217.777L27.1398 123.812L297.86 123.812L297.86 217.777C297.86 219.601 296.337 221.094 294.475 221.094ZM108.333 165.82L108.333 187.93C108.333 191.578 105.286 194.562 101.562 194.562L60.9375 194.562C57.2135 194.562 54.1667 191.578 54.1667 187.93L54.1667 165.82C54.1667 162.172 57.2135 159.188 60.9375 159.188L101.562 159.188C105.286 159.188 108.333 162.172 108.333 165.82ZM216.667 165.82L216.667 187.93C216.667 191.578 213.62 194.562 209.896 194.562L133.16 194.562C129.436 194.562 126.389 191.578 126.389 187.93L126.389 165.82C126.389 162.172 129.436 159.188 133.16 159.188L209.896 159.188C213.62 159.188 216.667 162.172 216.667 165.82Z"
        viewBox={{ minX: 0, minY: 0, width: 325, height: 247.625 }}
        color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
        position="absolute"
        top="6.25%"
        bottom="6.25%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
    </View>
  );
}
