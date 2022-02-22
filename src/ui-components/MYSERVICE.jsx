/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CREDITDESC from "./CREDITDESC";
import PERSONALDESC from "./PERSONALDESC";
import HOUSINGDESC from "./HOUSINGDESC";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import PERSONALBTN from "./PERSONALBTN";
import HOUSINGBTN from "./HOUSINGBTN";
import CREDITBTN from "./CREDITBTN";
export default function MYSERVICE(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1920px"
      height="1080px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(0deg, rgba(255,236.00000113248825,210.00000268220901,1), rgba(252.00000017881393,182.00000435113907,159.0000057220459,1))"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <CREDITDESC
        position="absolute"
        top="776px"
        left="765px"
        {...getOverrideProps(overrides, "View.CREDITDESC[0]")}
      ></CREDITDESC>
      <PERSONALDESC
        position="absolute"
        top="772px"
        left="155px"
        {...getOverrideProps(overrides, "View.PERSONALDESC[0]")}
      ></PERSONALDESC>
      <HOUSINGDESC
        position="absolute"
        top="773px"
        left="1379px"
        {...getOverrideProps(overrides, "View.HOUSINGDESC[0]")}
      ></HOUSINGDESC>
      <View
        width="1920px"
        height="398px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(252.00000017881393,181.99998915195465,159.0000057220459,0.800000011920929)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Icon
        width="194.3333282470703px"
        height="192.50315856933594px"
        pathData="M97.4776 3.08403C94.5657 1.07992 91.0544 0 87.45 0C83.8456 0 80.3343 1.07992 77.4224 3.08403L5.31502 52.7121C-4.17817 59.2388 0.709319 73.3921 12.4471 73.4104L126.317 73.4104L126.317 73.337L155.467 73.337L155.467 73.4012L162.453 73.4012C174.191 73.3829 179.068 59.2296 169.585 52.703L97.4776 3.08403ZM87.45 29.8872C90.027 29.8872 92.4985 30.853 94.3207 32.5721C96.1429 34.2912 97.1667 36.6227 97.1667 39.0539C97.1667 41.485 96.1429 43.8166 94.3207 45.5356C92.4985 47.2547 90.027 48.2205 87.45 48.2205C84.873 48.2205 82.4015 47.2547 80.5793 45.5356C78.757 43.8166 77.7333 41.485 77.7333 39.0539C77.7333 36.6227 78.757 34.2912 80.5793 32.5721C82.4015 30.853 84.873 29.8872 87.45 29.8872ZM80.1625 122.919C79.288 124.624 78.6175 126.448 78.2192 128.364L60.7292 128.364L60.7292 82.5587L80.1625 82.5587L80.1625 122.919ZM114.171 86.5095C109.159 88.3563 104.856 91.5868 101.822 95.7785C98.7879 99.9702 97.1655 104.928 97.1667 110.004L97.1667 110.462C96.3467 110.617 95.5359 110.813 94.7375 111.049L94.7375 82.5587L114.171 82.5587L114.171 86.5095ZM77.7333 169.587L7.2875 169.587C5.35473 169.587 3.50113 168.862 2.13446 167.573C0.767787 166.284 0 164.535 0 162.712L0 158.128C0.00515105 152.661 2.31079 147.42 6.41024 143.556C10.5097 139.692 16.0676 137.522 21.8625 137.522L77.7333 137.522L77.7333 169.587ZM24.2917 128.364L46.1542 128.364L46.1542 82.5678L24.2917 82.5678L24.2917 128.373L24.2917 128.364ZM106.883 119.17L102.025 119.17C98.1595 119.17 94.4523 120.619 91.7189 123.197C88.9856 125.776 87.45 129.273 87.45 132.92L87.45 146.67L111.742 146.67L111.742 144.378C111.742 142.555 112.509 140.806 113.876 139.517C115.243 138.228 117.096 137.503 119.029 137.503C120.962 137.503 122.816 138.228 124.182 139.517C125.549 140.806 126.317 142.555 126.317 144.378L126.317 146.67L155.467 146.67L155.467 144.378C155.467 142.555 156.234 140.806 157.601 139.517C158.968 138.228 160.821 137.503 162.754 137.503C164.687 137.503 166.541 138.228 167.907 139.517C169.274 140.806 170.042 142.555 170.042 144.378L170.042 146.67L194.333 146.67L194.333 132.92C194.333 129.273 192.798 125.776 190.064 123.197C187.331 120.619 183.624 119.17 179.758 119.17L174.9 119.17L174.9 110.004C174.9 105.749 173.108 101.669 169.92 98.6604C166.731 95.652 162.406 93.9619 157.896 93.9619L123.887 93.9619C119.378 93.9619 115.053 95.652 111.864 98.6604C108.675 101.669 106.883 105.749 106.883 110.004L106.883 119.17ZM121.458 110.004C121.458 109.396 121.714 108.813 122.17 108.383C122.625 107.953 123.243 107.712 123.887 107.712L157.896 107.712C158.54 107.712 159.158 107.953 159.614 108.383C160.069 108.813 160.325 109.396 160.325 110.004L160.325 119.17L121.458 119.17L121.458 110.004ZM102.025 192.503C98.1595 192.503 94.4523 191.055 91.7189 188.476C88.9856 185.897 87.45 182.4 87.45 178.753L87.45 160.42L111.742 160.42L111.742 167.295C111.742 169.118 112.509 170.867 113.876 172.156C115.243 173.446 117.096 174.17 119.029 174.17C120.962 174.17 122.816 173.446 124.182 172.156C125.549 170.867 126.317 169.118 126.317 167.295L126.317 160.42L155.467 160.42L155.467 167.295C155.467 169.118 156.234 170.867 157.601 172.156C158.968 173.446 160.821 174.17 162.754 174.17C164.687 174.17 166.541 173.446 167.907 172.156C169.274 170.867 170.042 169.118 170.042 167.295L170.042 160.42L194.333 160.42L194.333 178.753C194.333 182.4 192.798 185.897 190.064 188.476C187.331 191.055 183.624 192.503 179.758 192.503L102.025 192.503Z"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 194.3333740234375,
          height: 192.50315856933594,
        }}
        color="rgba(105.18749848008156,43.839243203401566,17.969532161951065,1)"
        position="absolute"
        top="104px"
        left="175px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Text
        fontFamily="Poppins"
        fontSize="144px"
        fontWeight="800"
        color="rgba(138.1250050663948,49.87518131732941,12.66145259141922,1)"
        lineHeight="168.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="92px"
        left="570px"
        padding="0px 0px 0px 0px"
        children="MY SERVICES"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="144px"
        fontWeight="800"
        color="rgba(138.1250050663948,49.87518131732941,12.66145259141922,0.20000000298023224)"
        lineHeight="168.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="100px"
        left="586px"
        padding="0px 0px 0px 0px"
        children="MY SERVICES"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <PERSONALBTN
        position="absolute"
        top="486px"
        left="222px"
        variant="link"
        {...getOverrideProps(overrides, "View.PERSONALBTN[0]")}
      ></PERSONALBTN>
      <HOUSINGBTN
        position="absolute"
        top="458px"
        left="1405px"
        variant="link"
        {...getOverrideProps(overrides, "View.HOUSINGBTN[0]")}
      ></HOUSINGBTN>
      <CREDITBTN
        position="absolute"
        top="521px"
        left="802px"
        variant="link"
        {...getOverrideProps(overrides, "View.CREDITBTN[0]")}
      ></CREDITBTN>
    </View>
  );
}
