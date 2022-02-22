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
export default function PERSONALBTN(props) {
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
      width="250px"
      height="286px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="250px"
        height="286px"
        pathData="M125 143C164.453 143 196.429 110.993 196.429 71.5C196.429 32.0074 164.453 0 125 0C85.5469 0 53.5714 32.0074 53.5714 71.5C53.5714 110.993 85.5469 143 125 143ZM175 160.875L165.681 160.875C153.292 166.573 139.509 169.812 125 169.812C110.491 169.812 96.7634 166.573 84.3192 160.875L75 160.875C33.5938 160.875 0 194.502 0 235.95L0 259.188C0 273.99 11.9978 286 26.7857 286L223.214 286C238.002 286 250 273.99 250 259.188L250 235.95C250 194.502 216.406 160.875 175 160.875Z"
        viewBox={{ minX: 0, minY: 0, width: 250, height: 286 }}
        color="rgba(111.5625,34.83593791723251,4.648442566394806,1)"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
    </View>
  );
}
