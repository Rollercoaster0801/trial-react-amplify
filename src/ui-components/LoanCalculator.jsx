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
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function LoanCalculator(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.View[0]": {},
        "View.Text[0]": {},
        "View.View[1].View[0].View[0].Icon[0]": {},
        "View.View[1].View[0].View[0].Icon[1]": {},
        "View.View[1].View[0].View[0]": {},
        "View.View[1].View[0]": {},
        "View.View[1]": {},
        View: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "View.View[0]": {},
        "View.Text[0]": {},
        "View.View[1].View[0].View[0].Icon[0]": {},
        "View.View[1].View[0].View[0].Icon[1]": {},
        "View.View[1].View[0].View[0]": {},
        "View.View[1].View[0]": {},
        "View.View[1]": {},
        View: {},
      },
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
      width="346px"
      height="141px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="6.382978723404255%"
        left="0.5780346820809248%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-73deg, rgba(255,236.00000113248825,210.00000268220901,1), rgba(252.00000017881393,182.00000435113907,159.0000057220459,1))"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="800"
        color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
        lineHeight="25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="24.113475177304963%"
        bottom="15.602836879432624%"
        left="31.502890173410403%"
        right="3.4682080924855487%"
        padding="0px 0px 0px 0px"
        children="LOAN CALCULATOR"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <View
        position="absolute"
        top="9.929078014184398%"
        bottom="0%"
        left="0%"
        right="60.982658959537574%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <View
          width="112px"
          height="112px"
          position="absolute"
          top="0px"
          left="29px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.View[1].View[0]")}
        >
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="-3.469446951953614e-16%"
            bottom="3.469446951953614e-16%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "View.View[1].View[0].View[0]")}
          >
            <Icon
              width="84px"
              height="112px"
              pathData="M70 7C71.8565 7 73.637 7.7375 74.9497 9.05025C76.2625 10.363 77 12.1435 77 14L77 98C77 99.8565 76.2625 101.637 74.9497 102.95C73.637 104.262 71.8565 105 70 105L14 105C12.1435 105 10.363 104.262 9.05025 102.95C7.7375 101.637 7 99.8565 7 98L7 14C7 12.1435 7.7375 10.363 9.05025 9.05025C10.363 7.7375 12.1435 7 14 7L70 7ZM14 3.88578e-16C10.287 2.72005e-15 6.72601 1.475 4.1005 4.10051C1.475 6.72601 3.10862e-15 10.287 0 14L0 98C3.10862e-15 101.713 1.475 105.274 4.1005 107.899C6.72601 110.525 10.287 112 14 112L70 112C73.713 112 77.274 110.525 79.8995 107.899C82.525 105.274 84 101.713 84 98L84 14C84 10.287 82.525 6.72601 79.8995 4.10051C77.274 1.475 73.713 2.33147e-15 70 0L14 3.88578e-16Z"
              viewBox={{ minX: 0, minY: 0, width: 84, height: 112 }}
              color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(
                overrides,
                "View.View[1].View[0].View[0].Icon[0]"
              )}
            ></Icon>
            <Icon
              width="56px"
              height="84px"
              pathData="M0 3.5C-3.10862e-15 2.57174 0.36875 1.6815 1.02513 1.02513C1.6815 0.36875 2.57174 -3.10862e-15 3.5 0L52.5 0C53.4283 0 54.3185 0.36875 54.9749 1.02513C55.6313 1.6815 56 2.57174 56 3.5L56 17.5C56 18.4283 55.6313 19.3185 54.9749 19.9749C54.3185 20.6313 53.4283 21 52.5 21L3.5 21C2.57174 21 1.6815 20.6313 1.02513 19.9749C0.36875 19.3185 -3.10862e-15 18.4283 0 17.5L0 3.5ZM0 31.5C-3.10862e-15 30.5717 0.36875 29.6815 1.02513 29.0251C1.6815 28.3687 2.57174 28 3.5 28L10.5 28C11.4283 28 12.3185 28.3687 12.9749 29.0251C13.6313 29.6815 14 30.5717 14 31.5L14 38.5C14 39.4283 13.6313 40.3185 12.9749 40.9749C12.3185 41.6312 11.4283 42 10.5 42L3.5 42C2.57174 42 1.6815 41.6312 1.02513 40.9749C0.36875 40.3185 -3.10862e-15 39.4283 0 38.5L0 31.5ZM0 52.5C-3.10862e-15 51.5717 0.36875 50.6815 1.02513 50.0251C1.6815 49.3687 2.57174 49 3.5 49L10.5 49C11.4283 49 12.3185 49.3687 12.9749 50.0251C13.6313 50.6815 14 51.5717 14 52.5L14 59.5C14 60.4283 13.6313 61.3185 12.9749 61.9749C12.3185 62.6313 11.4283 63 10.5 63L3.5 63C2.57174 63 1.6815 62.6313 1.02513 61.9749C0.36875 61.3185 -3.10862e-15 60.4283 0 59.5L0 52.5ZM0 73.5C-3.10862e-15 72.5717 0.36875 71.6815 1.02513 71.0251C1.6815 70.3687 2.57174 70 3.5 70L10.5 70C11.4283 70 12.3185 70.3687 12.9749 71.0251C13.6313 71.6815 14 72.5717 14 73.5L14 80.5C14 81.4283 13.6313 82.3185 12.9749 82.9749C12.3185 83.6313 11.4283 84 10.5 84L3.5 84C2.57174 84 1.6815 83.6313 1.02513 82.9749C0.36875 82.3185 -3.10862e-15 81.4283 0 80.5L0 73.5ZM21 31.5C21 30.5717 21.3687 29.6815 22.0251 29.0251C22.6815 28.3687 23.5717 28 24.5 28L31.5 28C32.4283 28 33.3185 28.3687 33.9749 29.0251C34.6313 29.6815 35 30.5717 35 31.5L35 38.5C35 39.4283 34.6313 40.3185 33.9749 40.9749C33.3185 41.6312 32.4283 42 31.5 42L24.5 42C23.5717 42 22.6815 41.6312 22.0251 40.9749C21.3687 40.3185 21 39.4283 21 38.5L21 31.5ZM21 52.5C21 51.5717 21.3687 50.6815 22.0251 50.0251C22.6815 49.3687 23.5717 49 24.5 49L31.5 49C32.4283 49 33.3185 49.3687 33.9749 50.0251C34.6313 50.6815 35 51.5717 35 52.5L35 59.5C35 60.4283 34.6313 61.3185 33.9749 61.9749C33.3185 62.6313 32.4283 63 31.5 63L24.5 63C23.5717 63 22.6815 62.6313 22.0251 61.9749C21.3687 61.3185 21 60.4283 21 59.5L21 52.5ZM21 73.5C21 72.5717 21.3687 71.6815 22.0251 71.0251C22.6815 70.3687 23.5717 70 24.5 70L31.5 70C32.4283 70 33.3185 70.3687 33.9749 71.0251C34.6313 71.6815 35 72.5717 35 73.5L35 80.5C35 81.4283 34.6313 82.3185 33.9749 82.9749C33.3185 83.6313 32.4283 84 31.5 84L24.5 84C23.5717 84 22.6815 83.6313 22.0251 82.9749C21.3687 82.3185 21 81.4283 21 80.5L21 73.5ZM42 31.5C42 30.5717 42.3687 29.6815 43.0251 29.0251C43.6815 28.3687 44.5717 28 45.5 28L52.5 28C53.4283 28 54.3185 28.3687 54.9749 29.0251C55.6313 29.6815 56 30.5717 56 31.5L56 38.5C56 39.4283 55.6313 40.3185 54.9749 40.9749C54.3185 41.6312 53.4283 42 52.5 42L45.5 42C44.5717 42 43.6815 41.6312 43.0251 40.9749C42.3687 40.3185 42 39.4283 42 38.5L42 31.5ZM42 52.5C42 51.5717 42.3687 50.6815 43.0251 50.0251C43.6815 49.3687 44.5717 49 45.5 49L52.5 49C53.4283 49 54.3185 49.3687 54.9749 50.0251C55.6313 50.6815 56 51.5717 56 52.5L56 80.5C56 81.4283 55.6313 82.3185 54.9749 82.9749C54.3185 83.6313 53.4283 84 52.5 84L45.5 84C44.5717 84 43.6815 83.6313 43.0251 82.9749C42.3687 82.3185 42 81.4283 42 80.5L42 52.5Z"
              viewBox={{ minX: 0, minY: 0, width: 56, height: 84 }}
              color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
              position="absolute"
              top="12.5%"
              bottom="12.5%"
              left="16.666666666666664%"
              right="16.666666666666664%"
              {...getOverrideProps(
                overrides,
                "View.View[1].View[0].View[0].Icon[1]"
              )}
            ></Icon>
          </View>
        </View>
      </View>
    </View>
  );
}
