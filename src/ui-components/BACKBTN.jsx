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
export default function BACKBTN(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "View.Icon[0]": {}, View: {} },
      variantValues: { isDISABLED: "false", variant: "link" },
    },
    {
      overrides: {
        "View.Icon[0]": {
          height: "111px",
          pathData:
            "M156.75 0L49.875 0C44.9588 0 41.1112 2.15833 38.5462 5.42667L0 55.5L38.5462 105.512C41.1112 108.78 44.9588 111 49.875 111L156.75 111C164.587 111 171 105.45 171 98.6667L171 12.3333C171 5.55 164.587 0 156.75 0ZM135.375 77.6383L125.329 86.3333L99.75 64.195L74.1712 86.3333L64.125 77.6383L89.7038 55.5L64.125 33.3617L74.1712 24.6667L99.75 46.805L125.329 24.6667L135.375 33.3617L109.796 55.5L135.375 77.6383Z",
          viewBox: '{"minX":0,"minY":0,"width":171,"height":111}',
        },
        View: { height: "111px" },
      },
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
      width="171px"
      height="115px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="171px"
        height="115px"
        pathData="M156.75 0L49.875 0C44.9588 0 41.1112 2.23611 38.5462 5.62222L0 57.5L38.5462 109.314C41.1112 112.7 44.9588 115 49.875 115L156.75 115C164.587 115 171 109.25 171 102.222L171 12.7778C171 5.75 164.587 0 156.75 0ZM135.375 80.4361L125.329 89.4444L99.75 66.5083L74.1712 89.4444L64.125 80.4361L89.7038 57.5L64.125 34.5639L74.1712 25.5556L99.75 48.4917L125.329 25.5556L135.375 34.5639L109.796 57.5L135.375 80.4361Z"
        viewBox={{ minX: 0, minY: 0, width: 171, height: 115 }}
        color="rgba(135.00000715255737,52.000000700354576,17.00000088661909,1)"
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
