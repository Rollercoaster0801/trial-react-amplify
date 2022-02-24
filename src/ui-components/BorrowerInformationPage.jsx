/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import PageOne from "./PageOne";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import BorrowerInformationInstructions from "./BorrowerInformationInstructions";
import SubmissionInstructions from "./SubmissionInstructions";
import BorrowersPersonalInfo from "./BorrowersPersonalInfo";
import PERSONALLETTER from "./PERSONALLETTER";
import APPLYTEXT from "./APPLYTEXT";
export default function BorrowerInformationPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      height="1741px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <PageOne
        height="1767px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "View.PageOne[0]")}
      ></PageOne>
      <Icon
        width="339px"
        height="339px"
        pathData="M339 169.5C339 263.112 263.112 339 169.5 339C75.8877 339 0 263.112 0 169.5C0 75.8877 75.8877 0 169.5 0C263.112 0 339 75.8877 339 169.5Z"
        viewBox={{ minX: 0, minY: 0, width: 339, height: 339 }}
        color="rgba(255,236.00000113248825,210.00000268220901,1)"
        position="absolute"
        top="1430px"
        left="-157px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Icon
        width="104px"
        height="104px"
        pathData="M104 52C104 80.7188 80.7188 104 52 104C23.2812 104 0 80.7188 0 52C0 23.2812 23.2812 0 52 0C80.7188 0 104 23.2812 104 52Z"
        viewBox={{ minX: 0, minY: 0, width: 104, height: 104 }}
        color="rgba(255,236.00000113248825,210.00000268220901,1)"
        position="absolute"
        top="1375px"
        left="118px"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
      <Icon
        width="182px"
        height="182px"
        pathData="M182 91C182 141.258 141.258 182 91 182C40.7421 182 0 141.258 0 91C0 40.7421 40.7421 0 91 0C141.258 0 182 40.7421 182 91Z"
        viewBox={{ minX: 0, minY: 0, width: 182, height: 182 }}
        color="rgba(255,236.00000113248825,210.00000268220901,1)"
        position="absolute"
        top="1225px"
        left="-57px"
        {...getOverrideProps(overrides, "View.Icon[2]")}
      ></Icon>
      <BorrowerInformationInstructions
        width="387px"
        height="469px"
        position="absolute"
        top="1925px"
        left="-2781px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "View.BorrowerInformationInstructions[0]"
        )}
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
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[0].Text[0]"
          )}
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
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[0].Text[1]"
          )}
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
          top="58.63539445628998%"
          bottom="22.60127931769723%"
          left="1.2919896640826873%"
          right="4.3927648578811365%"
          padding="0px 0px 0px 0px"
          children="STEP 2: BORROWER INFORMATION"
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[0].Text[2]"
          )}
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
          top="81.2366737739872%"
          bottom="0%"
          left="1.2919896640826873%"
          right="4.3927648578811365%"
          padding="0px 0px 0px 0px"
          children="STEP 3: SUBMISSION"
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[0].Text[3]"
          )}
        ></Text>
      </BorrowerInformationInstructions>
      <SubmissionInstructions
        width="387px"
        height="469px"
        position="absolute"
        top="2485px"
        left="-2786px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.SubmissionInstructions[0]")}
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
          {...getOverrideProps(
            overrides,
            "View.SubmissionInstructions[0].Text[0]"
          )}
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
          {...getOverrideProps(
            overrides,
            "View.SubmissionInstructions[0].Text[1]"
          )}
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
          {...getOverrideProps(
            overrides,
            "View.SubmissionInstructions[0].Text[2]"
          )}
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
          {...getOverrideProps(
            overrides,
            "View.SubmissionInstructions[0].Text[3]"
          )}
        ></Text>
      </SubmissionInstructions>
      <BorrowerInformationInstructions
        width="387px"
        height="469px"
        position="absolute"
        top="378px"
        left="14px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "View.BorrowerInformationInstructions[1]"
        )}
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
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[1].Text[0]"
          )}
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
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[1].Text[1]"
          )}
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
          top="58.63539445628998%"
          bottom="22.60127931769723%"
          left="1.2919896640826873%"
          right="4.3927648578811365%"
          padding="0px 0px 0px 0px"
          children="STEP 2: BORROWER INFORMATION"
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[1].Text[2]"
          )}
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
          top="81.2366737739872%"
          bottom="0%"
          left="1.2919896640826873%"
          right="4.3927648578811365%"
          padding="0px 0px 0px 0px"
          children="STEP 3: SUBMISSION"
          {...getOverrideProps(
            overrides,
            "View.BorrowerInformationInstructions[1].Text[3]"
          )}
        ></Text>
      </BorrowerInformationInstructions>
      <BorrowersPersonalInfo
        position="absolute"
        top="336px"
        left="406px"
        {...getOverrideProps(overrides, "View.BorrowersPersonalInfo[0]")}
      ></BorrowersPersonalInfo>
      <APPLYTEXT
        width="948px"
        height="174px"
        position="absolute"
        top="38px"
        left="184px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.APPLYTEXT[0]")}
      >
        <PERSONALLETTER
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "View.APPLYTEXT[0].PERSONALLETTER[0]"
          )}
        >
          <Text
            fontFamily="Poppins"
            fontSize="56px"
            fontWeight="800"
            color="rgba(252.00000017881393,182.00000435113907,159.0000057220459,1)"
            lineHeight="65.625px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0.7674176481705678%"
            right="0.14167138795812423%"
            padding="0px 0px 0px 0px"
            children="APPLY FOR PERSONAL LOAN"
            {...getOverrideProps(
              overrides,
              "View.APPLYTEXT[0].PERSONALLETTER[0].Text[0]"
            )}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="56px"
            fontWeight="800"
            color="rgba(112.000000923872,35.00000171363354,5.000000176951289,1)"
            lineHeight="65.625px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0.9090825978210707%"
            padding="0px 0px 0px 0px"
            children="APPLY FOR PERSONAL LOAN"
            {...getOverrideProps(
              overrides,
              "View.APPLYTEXT[0].PERSONALLETTER[0].Text[1]"
            )}
          ></Text>
        </PERSONALLETTER>
      </APPLYTEXT>
    </View>
  );
}
